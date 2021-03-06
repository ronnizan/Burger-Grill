import { USER_LOGOUT } from '../constants/authConstants';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS,  SET_CHATBOT_ID } from '../constants/chatbotConstants';
import { CartAction, Cart, } from '../types/cartTypes';
import { ChatbotAction, ChatbotMessage } from '../types/chatbotTypes';

  

export const chatbotReducer = (state: { loading: boolean, messages: ChatbotMessage[], error: string, chatbotId: string } = { loading: false, messages: [], error: '', chatbotId: '' }, action: ChatbotAction) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,   
        loading: true,
      }
    // case SEND_MESSAGE_SUCCESS:
    //   return {
    //     loading: false, messages: [], error: '' 
    //   }
    case RECEIVED_MESSAGE_SUCCESS:
      return {
        loading: false, messages: [...state.messages, ...action.payload], error: '', chatbotId: state.chatbotId
      }
    // case USER_LOGOUT:  
    //   return {
    //     cartItems: []
    //   }
    case SEND_MESSAGE_FAIL:
      return {
        loading: [], messages: [], error: action.payload, chatbotId: state.chatbotId
      }
    case SET_CHATBOT_ID:
      return {
        ...state,
        chatbotId: action.payload

      }
    default:
      return state;
  }
}


