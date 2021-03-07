import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import { popupMessage } from './popupMessageAction';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID, SET_ORDER_DEATILS } from '../constants/chatbotConstants';
import axios from 'axios';
import { ServerBaseUrlProd } from './../constants/endPoints';
import { ChatbotAction, ChatbotMessage, } from '../types/chatbotTypes';
import uidGenerator from '../../helpers/genrateUid';
import { Order } from '../types/orderTypes';
import { User } from '../types/authTypes';
import { CartItem } from './../types/cartTypes';
import { getCartTotal } from './../../helpers/getCartTotal';
import { getCartTotalForLoggedUser } from '../../helpers/getCartTotal';
import { createOrder } from './orderActions';

// const res = await axios.post('https://us-central1-burgergril-30358.cloudfunctions.net/api/dialogFlow/text-query', { text: 'Who are you?' });
let order: Order;

export const handleUserInfo = (res: any) => {

  const order: Order = {
    id: uidGenerator(),
    create_time: new Date().toLocaleString(),
    orderItems: [],
    userId: 'Anonymous',
    amount: 0,
    orderMethod: 'Pickup',
    firstName: res.data.parameters.fields.firstName.stringValue,
    lastName: res.data.parameters.fields.lastName.stringValue,
    city: res.data.parameters.fields?.city?.stringValue || '',
    address: res.data.parameters.fields?.address?.stringValue || '',
    floor: res.data.parameters.fields?.floor?.stringValue || '',
    apartmentNumber: res.data.parameters.fields?.apartmentNumber?.stringValue || '',
    email: res.data.parameters.fields?.email.stringValue,
    phoneNumber: res.data.parameters.fields?.phone.stringValue,
    orderNotes: res.data.parameters.fields?.orderNotes.stringValue,
  }
  return order;

}
export const handlePickupPayment = (res: any, uid: string, order: Order, payNow: boolean): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async (dispatch, getState) => {
    try {
      const {
        userLogin,
        cartChatbot
      } = getState();
      const { user }: { user: User } = userLogin;
      const { cartItems }: { cartItems: CartItem[] } = cartChatbot;

      if (!payNow) {
        order.userId = user?.id ? user?.id : order.userId;
        order.orderItems = cartItems;
        order.amount = user?.id ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems);
        order.payAtRestaurant = true;
        dispatch(createOrder(order))
      }
      if (payNow) {
        order.userId = user?.id ? user?.id : order.userId;
        order.orderItems = cartItems;
        order.amount = user?.id ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems);
        const message = [{content: 'please complete the payment process',fromUser: false,type:'showPaypalButton'}]
        dispatch({
          type: RECEIVED_MESSAGE_SUCCESS,
          payload: message
        })
        dispatch({
          type: SET_ORDER_DEATILS,
          payload: order
        })
      }


    } catch (err) {
      console.log('err', err);
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: 'failed to Initialize chatbot'
      });

    }
  }
}

export const pickupSelected = (uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'PickupSelected', uid: uid });

      const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
        return { content: message, fromUser: false }
      })
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })

      firstResponse.data.fulfillmentMessages[1].payload.fields.cards.listValue.values.forEach(card => {
        if (card?.structValue?.fields?.title?.stringValue) {
          messagesArr.push({ content: card.structValue.fields.title.stringValue, image: card.structValue.fields.image.stringValue, fromUser: false, type: card.structValue.fields.type.stringValue })
        }
      })

      firstResponse.data.fulfillmentMessages[2].text.text.forEach(message => {
        messagesArr.push({ content: message, fromUser: false })

      })
      dispatch({
        type: RECEIVED_MESSAGE_SUCCESS,
        payload: messagesArr
      })
    } catch (err) {
      console.log('err', err);
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: 'failed to Initialize chatbot'
      });

    }
  }
}


export const sendChatbotMessage = (content: string, uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const res = await axios.post(ServerBaseUrlProd + '/dialogFlow/text-query', { text: content, uid: uid });

      let messagesArr: ChatbotMessage[]
      messagesArr = [{ content, fromUser: true }]
      res.data.fulfillmentMessages[0].text.text.forEach(message => {
        messagesArr.push({ content: message, fromUser: false })
      })

      if (res.data.fulfillmentMessages[1]) {
        res.data.fulfillmentMessages[1]?.payload?.fields?.cards?.listValue?.values?.forEach(card => {
          messagesArr.push({ content: card.structValue.fields.title.stringValue, image: card.structValue.fields.image.stringValue, fromUser: false, type: card.structValue.fields.type.stringValue })
        })
      }

      dispatch({
        type: RECEIVED_MESSAGE_SUCCESS,
        payload: messagesArr
      })

      if (res.data.allRequiredParamsPresent && res.data.action === 'pickupUserInfo') {
        const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'payNowOrLaterQuestion', uid: uid });
        const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
          return { content: message, fromUser: false }
        })
        dispatch({
          type: RECEIVED_MESSAGE_SUCCESS,
          payload: messagesArr
        })
      }


      if (res.data.action === 'pickupUserInfo' && res.data.allRequiredParamsPresent) {
        order = handleUserInfo(res)
      }
      if (res.data.action === 'paymentNow') {
        dispatch(handlePickupPayment(res, uid, order, true))
      }
      if (res.data.action === 'paymentLater') {
        dispatch(handlePickupPayment(res, uid, order, false))
      }


    } catch (err) {
      console.log('err', err);
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: 'failed to Initialize chatbot'
      });

    }
  }
}
export const initialChatbot = (uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      dispatch({
        type: SET_CHATBOT_ID,
        payload: uid
      })
      const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'Welcome', uid: uid });

      // console.log(uid)
      const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
        return { content: message, fromUser: false }
      })
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const secondResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'RestaurantOptions', uid: uid });
      const receivedMessage = { content: secondResponse.data.fulfillmentMessages[0].text.text[0], fromUser: false }
      // console.log(secondResponse)
      messagesArr.push(receivedMessage);
      secondResponse.data.fulfillmentMessages[1].payload.fields.cards.listValue.values.forEach(card => {
        messagesArr.push({ content: card.structValue.fields.title.stringValue, image: card.structValue.fields.image.stringValue, fromUser: false, type: card.structValue.fields.type.stringValue })
      })
      dispatch({
        type: RECEIVED_MESSAGE_SUCCESS,
        payload: messagesArr
      })

    } catch (err) {
      console.log('err', err);
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload: 'failed to Initialize chatbot'
      });

    }
  }
}
// export const getOrdersForUser = (): ThunkAction<void, RootState, null, OrderAction> => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: GET_ORDERS_FOR_USER_REQUEST
//       })
//       const {
//         userLogin
//       } = getState();

//       const { user }: { user: User } = userLogin;
//       let userId;
//       if (user && user.id) {
//         userId = user.id;
//       }

//       const orders = await firebase.firestore().collection('orders').where('userId', '==', userId)
//         .get();
//       if (orders.empty) {
//         dispatch({
//           type: GET_ORDERS_FOR_USER_SUCCESS,
//           payload: []
//         });
//       } else {
//         let ordersFromDb: Order [] = [];
//         orders.forEach(doc => {
//           ordersFromDb.push(doc.data() as Order);
//         });
//         dispatch({
//           type: GET_ORDERS_FOR_USER_SUCCESS,
//           payload: ordersFromDb
//         });

//       }

//     } catch (err) {
//       console.log('err', err);
//       dispatch({
//         type: GET_ORDERS_FOR_USER_FAIL,
//         payload: 'get orders failed'
//       });
//     }
//   }
// }









