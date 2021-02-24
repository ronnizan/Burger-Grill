import { USER_LOGOUT } from "../constants/authConstants";

import { CartItem } from './cartTypes';
import { CLEAR_ORDER, CREATE_ORDER_REQUEST } from './../constants/orderConstants';
import { CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL } from '../constants/orderConstants';

export interface Order {
  id: string;
  create_time: string;
  amount: number;
  userId: string;
  orderItems: CartItem[];
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  floor: number;
  orderMethod: string;
  apartmentNumber: number;
  email: string;
  phoneNumber: string;
  orderNotes: string;
}

interface CreateOrderRequest {
  type: typeof CREATE_ORDER_REQUEST;
}
interface CreateOrderSuccess {
  type: typeof CREATE_ORDER_SUCCESS;
  payload: Order
} 
interface CreateOrderFail {
  type: typeof CREATE_ORDER_FAIL;
  payload: string
}
interface ClearOrder {
  type: typeof CLEAR_ORDER;

}

interface SignOutAction {
  type: typeof USER_LOGOUT;
}

  

export type OrderAction = CreateOrderRequest | CreateOrderSuccess | CreateOrderFail | SignOutAction | ClearOrder;

