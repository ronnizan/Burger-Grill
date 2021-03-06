import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID, SET_ORDER_DEATILS,CLEAR_ORDER_DEATILS, SET_RESTAURANT_OPTION_SELECTED} from '../constants/chatbotConstants';
import { Order } from './orderTypes';
import { CLEAR_RESTAURANT_OPTION_SELECTED } from './../constants/chatbotConstants';

export interface ChatbotMessage {
  content: string;
  fromUser: boolean;
  image?:string;
  type?: string;
  orderDeatils?:any;
}


interface SetChatbotId {
  type: typeof SET_CHATBOT_ID;
  payload:string;
}
interface SetOrderDeatils {
  type: typeof SET_ORDER_DEATILS;
  payload:Order;
}
interface ClearOrderDeatils {
  type: typeof CLEAR_ORDER_DEATILS;
}
interface SetRestaurantOption {
  type: typeof SET_RESTAURANT_OPTION_SELECTED;
  payload:string;
}
interface ClearRestaurantOption {
  type: typeof CLEAR_RESTAURANT_OPTION_SELECTED;
}
interface SendMessageRequest {
  type: typeof SEND_MESSAGE_REQUEST;
}
interface SendMessageSuccess {
  type: typeof SEND_MESSAGE_SUCCESS;
  payload: string;
}
interface SendMessageFail {
  type: typeof SEND_MESSAGE_FAIL;
  payload: string;
}
interface ReceivedMessageSuccess { 
  type: typeof RECEIVED_MESSAGE_SUCCESS;
  payload:ChatbotMessage[];
}

export type ChatbotAction = SendMessageRequest | SendMessageSuccess | SendMessageFail|ReceivedMessageSuccess|SetChatbotId|SetOrderDeatils|ClearOrderDeatils|SetRestaurantOption|ClearRestaurantOption ;

     