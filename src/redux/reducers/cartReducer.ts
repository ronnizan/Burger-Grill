import { USER_LOGOUT } from '../constants/authConstants';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART, ADD_ITEM_TO_CHATBOT_CART, CLEAR_CHATBOT_CART } from '../constants/cartConstants';
import { CartAction, Cart, } from '../types/cartTypes';

export const cartReducer = (state: Cart = { cartItems: [] }, action: CartAction) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload]
      }
    case REMOVE_ITEM_FROM_CART:
      const cartToRemoveIndex = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItemsCopy = [...state.cartItems];
      cartItemsCopy.splice(cartToRemoveIndex, 1);
      return {
        cartItems:cartItemsCopy
      }
    case USER_LOGOUT:
      return {
        cartItems: []
      }
    case CLEAR_CART:
      return {
        cartItems: []
      }
    default:
      return state;
  }
}


export const cartChatbotReducer = (state: Cart = { cartItems: [] }, action: CartAction) => {
  switch (action.type) {
    case ADD_ITEM_TO_CHATBOT_CART:
      return {
        cartItems: [...state.cartItems, action.payload]
      }
    case REMOVE_ITEM_FROM_CART:
      const cartToRemoveIndex = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItemsCopy = [...state.cartItems];
      cartItemsCopy.splice(cartToRemoveIndex, 1);
      return {
        cartItems:cartItemsCopy
      }
    case USER_LOGOUT:
      return {
        cartItems: []
      }
    case CLEAR_CHATBOT_CART:  
      return {
        cartItems: []
      }
    default:
      return state;
  }
}


