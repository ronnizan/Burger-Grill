import { USER_LOGOUT } from '../constants/authConstants';
import { CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CLEAR_ORDER, GET_ORDERS_FOR_USER_REQUEST, GET_ORDERS_FOR_USER_FAIL } from '../constants/orderConstants';
import { OrderAction, Order, } from '../types/orderTypes';
import { GET_ORDERS_FOR_USER_SUCCESS } from './../constants/orderConstants';

export interface OrderState {
  order: Order;
  loading: boolean;
  error: string;
}
export interface OrderFromDbState {
  orders: Order[];
  loading: boolean;
  error: string;
}

const orderInitialState = {
  order: {
    id: '',
    create_time: '',
    amount: 0,
    userId: '',
    orderItems: [],
    firstName: '',
    lastName: '',
    city: '',
    address: '',
    floor: 0,
    apartmentNumber: 0,
    email: '',
    phoneNumber: '',
    orderNotes: '',
    orderMethod:''
  },
  loading: false,
  error: ''
}

export const creatOrderReducer = (state: OrderState = orderInitialState, action: OrderAction) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      }
    case CREATE_ORDER_SUCCESS:
      return {
        order: action.payload, loading: false, error: ''
      }
    case CREATE_ORDER_FAIL:
      return orderInitialState;

    case CLEAR_ORDER:
      return orderInitialState;


    case USER_LOGOUT:
      return orderInitialState
    default:
      return state;
  }
}


export const getOrdersForUserReducer = (state: OrderFromDbState = {orders: [],loading: false, error:''}, action: OrderAction) => {
  switch (action.type) {
    case GET_ORDERS_FOR_USER_REQUEST:
      return {
        loading: true,
      }
    case GET_ORDERS_FOR_USER_SUCCESS:
      return {
        orders: action.payload, loading: false, error: ''
      }
    case GET_ORDERS_FOR_USER_FAIL:
      return {orders: [],loading: false, error:'Failed to get orders'}

    case USER_LOGOUT:
      return {orders: [],loading: false, error:''}
    default:
      return state;
  }
}


