import { USER_LOGOUT } from "../constants/authConstants";

import { CartItem } from './cartTypes';
import { CLEAR_ORDER, CREATE_ORDER_REQUEST, GET_ORDERS_FOR_USER_FAIL, GET_ORDERS_FOR_USER_REQUEST, GET_ORDERS_FOR_USER_SUCCESS } from './../constants/orderConstants';
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
  payAtRestaurant?:boolean;
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
interface GetOrdersForUserRequest {
  type: typeof GET_ORDERS_FOR_USER_REQUEST;
}
interface GetOrdersForUserSuccess {
  type: typeof GET_ORDERS_FOR_USER_SUCCESS;
  payload: Order []
} 
interface GetOrdersForUserFail {
  type: typeof GET_ORDERS_FOR_USER_FAIL;
  payload: string
}



interface ClearOrder {
  type: typeof CLEAR_ORDER;

}

interface SignOutAction {
  type: typeof USER_LOGOUT;
}

  

export type OrderAction = CreateOrderRequest | CreateOrderSuccess | CreateOrderFail | SignOutAction | GetOrdersForUserRequest|GetOrdersForUserSuccess|GetOrdersForUserFail|  ClearOrder;

