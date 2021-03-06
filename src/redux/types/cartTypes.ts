import { USER_LOGOUT } from "../constants/authConstants";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_CHATBOT_CART, REMOVE_ITEM_FROM_CHATBOT_CART, CLEAR_CHATBOT_CART } from '../constants/cartConstants';
import { CLEAR_CART } from './../constants/cartConstants';

export interface CartItem {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
  burgerSize?: string;
  cookingLevel?: string;
  sideDish?: string;
  drink?: string;
  type: string;
  changes?: {
    noOnion: boolean;
    noLettuce: boolean;
    noTomato: boolean;
    noPickle: boolean;
    noVegetables: boolean;
    vegetablesOnTheSide: boolean;
  }
}

export interface Cart {
  cartItems: CartItem[];
}


interface AddItemToCart {
  type: typeof ADD_ITEM_TO_CART;
  payload: CartItem;
}
interface RemoveItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: string
}
interface ClearCart {
  type: typeof CLEAR_CART;
}

interface AddItemToChatbotCart {
  type: typeof ADD_ITEM_TO_CHATBOT_CART;
  payload: CartItem;
}
interface RemoveItemFromChatbotCart {
  type: typeof REMOVE_ITEM_FROM_CHATBOT_CART;
  payload: string
}
interface ClearChatbotCart {
  type: typeof CLEAR_CHATBOT_CART;
}

interface SignOutAction {
  type: typeof USER_LOGOUT;
}



export type CartAction = AddItemToCart | RemoveItemFromCart | ClearCart | AddItemToChatbotCart | RemoveItemFromChatbotCart | ClearChatbotCart | SignOutAction;

