import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, RECEIVED_MESSAGE_SUCCESS, SET_CHATBOT_ID } from '../constants/chatbotConstants';

export interface ChatbotMessage {
  content: string;
  fromUser: boolean;
  image?:string
  type?: string
}


interface SetChatbotId {
  type: typeof SET_CHATBOT_ID;
  payload:string;
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

export type ChatbotAction = SendMessageRequest | SendMessageSuccess | SendMessageFail|ReceivedMessageSuccess|SetChatbotId ;

    