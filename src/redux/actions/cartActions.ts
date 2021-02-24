import { ThunkAction } from 'redux-thunk';
import { RESET_ERROR, USER_LOGOUT } from '../constants/authConstants';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';
import { popupMessage } from './popupMessageAction';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cartConstants';
import { CartAction, CartItem } from '../types/cartTypes';


export const addItemToCart = (cartItem: CartItem): ThunkAction<void, RootState, null, CartAction> => {
  return dispatch => {
    dispatch({  
      type: ADD_ITEM_TO_CART,
      payload: cartItem
    });
  }
}

export const removeItemFromCart = (cartId: string): ThunkAction<void, RootState, null, CartAction> => {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: cartId
    });
  }
}




