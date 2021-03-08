import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_CHATBOT_CART } from '../constants/cartConstants';
import { RECEIVED_MESSAGE_SUCCESS, SEND_MESSAGE_REQUEST } from '../constants/chatbotConstants';
import { CartAction, CartItem } from '../types/cartTypes';
import { ChatbotAction } from '../types/chatbotTypes';
import axios from 'axios';
import { ServerBaseUrlProd } from '../constants/endPoints';


export const addItemToCart = (cartItem: CartItem): ThunkAction<void, RootState, null, CartAction> => {
  return dispatch => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: cartItem
    });
  }
}
export const addItemToChatbotCart = (cartItem: CartItem): ThunkAction<void, RootState, null, CartAction | ChatbotAction> => {
  return async (dispatch, getState) => {

    const {
      chatbot  
    } = getState();
    const { chatbotId, restaurantOption}: { chatbotId: string,restaurantOption:string } = chatbot;
    let chatbotIdFromState;
    if (chatbot && chatbotId) {
      chatbotIdFromState = chatbotId  
    }
    dispatch({
      type: ADD_ITEM_TO_CHATBOT_CART,
      payload: cartItem
    });
    let messagesArr = [{ content: `Great Pick!,  ${cartItem.title} is one of our Best meals!, with ${cartItem.drink} and ${cartItem.sideDish} on the side. We just need a few Deatils to finish up you're order`, fromUser: false }]

    dispatch({
      type: RECEIVED_MESSAGE_SUCCESS,
      payload: messagesArr
    })

    dispatch({
      type: SEND_MESSAGE_REQUEST
    })
    let dialogFlowRequest;
    if (restaurantOption ==='PickupSelected') {
      dialogFlowRequest = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'pickupItemSelected', uid: chatbotIdFromState });

    }
    if (restaurantOption ==='DeliverySelected') {
      dialogFlowRequest = await axios.post(ServerBaseUrlProd + '/dialogFlow/event-query', { event: 'deliveryItemSelected', uid: chatbotIdFromState });

    }

    // console.log(uid)
    let secondMessagesArr = []
    dialogFlowRequest.data.fulfillmentMessages[0].text.text.forEach(message => {
      secondMessagesArr.push({ content: message, fromUser: false })
    })


    dispatch({
      type: RECEIVED_MESSAGE_SUCCESS,
      payload: secondMessagesArr
    })

  }


  // const messagesArr = firstResponse.data.fulfillmentMessages[0].text.text.map(message => {
  //   return { content: message, fromUser: false }
  // })


}

export const removeItemFromCart = (cartId: string): ThunkAction<void, RootState, null, CartAction> => {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: cartId
    });
  }
}




