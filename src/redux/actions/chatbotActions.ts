import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ReservationData, TableData } from './../types/reservationTypes';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID, SET_ORDER_DEATILS, SET_RESTAURANT_OPTION_SELECTED } from '../constants/chatbotConstants';
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
import { formatDateToShowUser, formatDateForBookTableData } from '../../helpers/convertDates';
import { isThereTableAvailable } from './reservationActions';
import { SET_RESERVATION_DATA_FROM_CHATBOT, SET_TABLE_FROM_CHATBOT } from '../constants/reservationConstants';
import { ReservationAction } from '../types/reservationTypes';

let order: Order;
let reservationData: ReservationData = { name: '', email: "", phoneNumber: '', date: '', time: '', partySize: 0 };
let tableData: TableData;


export const handleUserInfo = (res: any, restaurantOption: string) => {
  const order: Order = {
    id: uidGenerator(),
    create_time: new Date().toLocaleString(),
    orderItems: [],
    userId: 'Anonymous',
    amount: 0,
    orderMethod: restaurantOption,
    firstName: res.data.parameters.fields.firstName.stringValue,
    lastName: res.data.parameters.fields.lastName.stringValue,
    city: res.data.parameters.fields?.city?.stringValue || '',
    address: res.data.parameters.fields?.address?.stringValue || '',
    floor: res.data.parameters.fields?.floor?.numberValue || '',
    apartmentNumber: res.data.parameters.fields?.apartmentNumber?.numberValue || '',
    email: res.data.parameters.fields?.email.stringValue,
    phoneNumber: res.data.parameters.fields?.phone.stringValue,
    orderNotes: res.data.parameters.fields?.orderNotes.stringValue,
  }
  return order;

}


export const handleTableFound = (uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async (dispatch, getState) => {
    try {
      const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'TableFound', uid: uid });
      const messagesArr = firstResponse.data?.fulfillmentMessages[0]?.text.text.map(message => {
        return { content: message, fromUser: false }
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
        //second argument indicates the request comes from the chatbot
        dispatch(createOrder(order, true))
      }
      if (payNow) {
        order.userId = user?.id ? user?.id : order.userId;
        order.orderItems = cartItems;
        order.amount = user?.id ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems);
        const message = [{ content: 'Please complete the payment process:', fromUser: false, type: 'showPaypalButton' }]
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

export const restaurantOptionChosen = (uid: string, optionChosen: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async dispatch => {
    try {


      dispatch({
        type: SET_RESTAURANT_OPTION_SELECTED,
        payload: optionChosen
      })
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: optionChosen, uid: uid });


      const messagesArr = firstResponse.data?.fulfillmentMessages[0]?.text.text.map(message => {
        return { content: message, fromUser: false }
      })

      dispatch({
        type: SEND_MESSAGE_REQUEST
      })

      firstResponse.data?.fulfillmentMessages[1]?.payload.fields.cards.listValue.values.forEach(card => {
        if (card?.structValue?.fields?.title?.stringValue) {
          messagesArr.push({ content: card.structValue.fields.title.stringValue, image: card.structValue.fields.image.stringValue, fromUser: false, type: card.structValue.fields.type.stringValue })
        }
      })

      firstResponse.data?.fulfillmentMessages[2]?.text.text.forEach(message => {
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


export const sendChatbotMessage = (content: string, uid: string): ThunkAction<void, RootState, null, ChatbotAction | ReservationAction> => {
  return async (dispatch, getState) => {
    try {

      const {
        userLogin,
        cartChatbot
      } = getState();
      const { user }: { user: User } = userLogin;
      const { cartItems }: { cartItems: CartItem[] } = cartChatbot;


      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const res = await axios.post(ServerBaseUrlProd + '/dialogFlow/text-query', { text: content, uid: uid });
      let messagesArr: ChatbotMessage[]

      if (res.data.action === 'checkTableAvailability' && res.data.allRequiredParamsPresent) {
        messagesArr = [{ content, fromUser: true }]
        let formatTableData;
        res.data.fulfillmentMessages[0].text.text.forEach(message => {
          messagesArr.push({ content: formatDateToShowUser(message), fromUser: false, type: 'bookTableData' })
          formatTableData = formatDateForBookTableData(message)
        })
        reservationData.date = formatTableData.date;
        reservationData.time = formatTableData.time;
        reservationData.partySize = formatTableData.guests;

        const table = await isThereTableAvailable(formatTableData)
        if (table) {
          tableData = table;
          messagesArr.push({ content: 'Great news!, we found a table at your desired date and time. we just need your deatils to complete the booking:', fromUser: false });
          dispatch(handleTableFound(uid))
        } else {
          messagesArr.push({ content: 'Sorry there is no table available at that date and time... please try again with different date or time', fromUser: false })
          dispatch(noTableAvailable(uid));
        }

      } else {
        messagesArr = [{ content, fromUser: true }]
        res.data.fulfillmentMessages[0].text.text.forEach(message => {
          messagesArr.push({ content: message, fromUser: false })
        })
      }




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


      if (res.data.action === 'bookTableUserInfo' && res.data.allRequiredParamsPresent) {

        reservationData.email = res.data.parameters.fields?.email.stringValue;
        reservationData.phoneNumber = res.data.parameters.fields?.phoneNumber.stringValue;
        reservationData.name = res.data.parameters.fields?.name.stringValue;
        dispatch({
          type: SET_RESERVATION_DATA_FROM_CHATBOT,
          payload: reservationData
        })
        dispatch({
          type: SET_TABLE_FROM_CHATBOT,
          payload: tableData
        })
      }

      if (res.data.action === 'pickupUserInfo' && res.data.allRequiredParamsPresent) {
        order = handleUserInfo(res, 'Pickup')
      }
      if (res.data.action === 'deliveryUserInfo' && res.data.allRequiredParamsPresent) {
        order = handleUserInfo(res, 'Delivery');
        order.userId = user?.id ? user?.id : order.userId;
        order.orderItems = cartItems;
        order.amount = user?.id ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems);
        const message = [{ content: 'Please complete the payment process:', fromUser: false, type: 'showPaypalButton' }]

        dispatch({
          type: RECEIVED_MESSAGE_SUCCESS,
          payload: message
        })
        dispatch({
          type: SET_ORDER_DEATILS,
          payload: order
        })

      }

      ///for pickup payment
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

      const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
        return { content: message, fromUser: false }
      })
      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const secondResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'RestaurantOptions', uid: uid });
      const receivedMessage = { content: secondResponse.data.fulfillmentMessages[0].text.text[0], fromUser: false }
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
export const finishChatbotConversation = (): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async (dispatch, getState) => {
    try {
      const {
        chatbot
      } = getState();
      const { chatbotId }: { chatbotId: string } = chatbot;


      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const response = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'finishConversation', uid: chatbotId });

      const messagesArr = response.data.fulfillmentMessages[0].text.text.map(message => {
        return { content: message, fromUser: false }
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
export const paymentProcessFailed = (): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async (dispatch, getState) => {
    try {

      const messagesArr =
        [{ content: 'Payment process failed.., please try again later!', fromUser: false }]
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
export const paymentProcessCompleted = (restaurantOption: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async (dispatch, getState) => {
    try {

      if (restaurantOption === 'Pickup') {
        const messagesArr =
          [{ content: 'Payment process Completed!, your order will be ready within 30 minutes.', fromUser: false }]
        dispatch({
          type: RECEIVED_MESSAGE_SUCCESS,
          payload: messagesArr
        })
      }
      if (restaurantOption === 'Delivery') {
        const messagesArr =
          [{ content: 'Payment process Completed!, your order will arrive to you within 30 minutes.', fromUser: false }]
        dispatch({
          type: RECEIVED_MESSAGE_SUCCESS,
          payload: messagesArr
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

export const noTableAvailable = (uid: string): ThunkAction<void, RootState, null, ChatbotAction> => {
  return async dispatch => {
    try {

      dispatch({
        type: SEND_MESSAGE_REQUEST
      })
      const firstResponse = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'BookTableSelected', uid: uid });


      const messagesArr = firstResponse.data?.fulfillmentMessages[0]?.text.text.map(message => {
        return { content: message, fromUser: false }
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







