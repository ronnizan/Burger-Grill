import { ThunkAction } from 'redux-thunk';

import { RootState } from '..';

import { Message } from '../types/popupMessageTypes';
import { PopupMessageAction } from '../types/popupMessageTypes';
import { RESET_MESSAGE, SHOW_MESSAGE } from '../constants/popupMessageConstants';
   
export const popupMessage = (message: Message): ThunkAction<void, RootState, null, PopupMessageAction> => {
  return async dispatch => {
    
      dispatch({
        type: SHOW_MESSAGE,
        payload: message
      });

      setTimeout(() => {
        dispatch({ type: RESET_MESSAGE });
      }, 5000);
  }
}
