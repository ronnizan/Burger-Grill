import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import { popupMessage } from './popupMessageAction';
import { CLEAR_CART } from '../constants/cartConstants';
import { Order, OrderAction } from '../types/orderTypes';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID } from '../constants/chatbotConstants';
import axios from 'axios';
import { CartAction } from '../types/cartTypes';
import { ServerBaseUrlProd } from './../constants/endPoints';
import { User } from './../types/authTypes';
import { GET_ORDERS_FOR_USER_SUCCESS } from './../constants/orderConstants';
import { ChatbotAction, ChatbotMessage, } from '../types/chatbotTypes';

// const res = await axios.post('https://us-central1-burgergril-30358.cloudfunctions.net/api/dialogFlow/text-query', { text: 'Who are you?' });

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
        // push meal info

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


export const SendChatbotMessage = (content: string, uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
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
      console.log(res.data)
      if (res.data.allRequiredParamsPresent && res.data.action === 'pickupUserInfo') {
        // const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'payNowOrLaterQuestion', uid: uid });

        // const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
        //   return { content: message, fromUser: false }
        // })
        // dispatch({
        //   type: RECEIVED_MESSAGE_SUCCESS,
        //   payload: messagesArr
        // })  
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









