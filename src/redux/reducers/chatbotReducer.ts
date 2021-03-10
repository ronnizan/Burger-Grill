import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID, SET_ORDER_DEATILS, SET_RESTAURANT_OPTION_SELECTED } from '../constants/chatbotConstants';
import { ChatbotAction, ChatbotMessage } from '../types/chatbotTypes';
import { CLEAR_ORDER_DEATILS } from './../constants/chatbotConstants';



export const chatbotReducer = (state: { loading: boolean, messages: ChatbotMessage[], error: string, chatbotId: string, orderDeatils: any, restaurantOption: string } = { loading: false, messages: [], error: '', chatbotId: '', orderDeatils: {}, restaurantOption: '' }, action: ChatbotAction) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case RECEIVED_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false, messages: [...state.messages, ...action.payload], error: ''
      }
    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: false, error: action.payload
      }
    case SET_CHATBOT_ID:
      return {
        ...state,
        chatbotId: action.payload

      }
    case SET_ORDER_DEATILS:
      return {
        ...state,
        orderDeatils: action.payload

      }
    case SET_RESTAURANT_OPTION_SELECTED:
      return {
        ...state,
        restaurantOption: action.payload

      }
    case CLEAR_ORDER_DEATILS:
      return {
        ...state
        , orderDeatils: {}

      }
    default:
      return state;
  }
}


