import {  RESET_MESSAGE,
  SHOW_MESSAGE } from '../constants/popupMessageConstants';
import { PopupMessageAction } from '../types/popupMessageTypes';

export const popupMessageReducer = (state = { error: '', successMessage: null, loading: false }, action: PopupMessageAction) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return { message: action.payload };
    case RESET_MESSAGE:
      return { message: false };
    default:
      return state;
  }
}




