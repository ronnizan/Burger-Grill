import { RESET_MESSAGE, SHOW_MESSAGE } from "../constants/popupMessageConstants"

export interface Message {
  content: string;
  type: string;
}


interface ShowMessageAction {
  type: typeof SHOW_MESSAGE;
  payload: Message;
}

interface ResetMessageAction {
  type: typeof RESET_MESSAGE;
}

export type PopupMessageAction = ShowMessageAction | ResetMessageAction ;

    