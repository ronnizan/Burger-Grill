import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import { popupMessage } from './popupMessageAction';
import { CLEAR_CART } from '../constants/cartConstants';
import { Order, OrderAction } from '../types/orderTypes';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_FAIL, CREATE_ORDER_SUCCESS, GET_ORDERS_FOR_USER_FAIL, GET_ORDERS_FOR_USER_REQUEST } from '../constants/orderConstants';
import axios from 'axios';
import { CartAction } from '../types/cartTypes';
import { ServerBaseUrlProd } from './../constants/endPoints';
import { User } from './../types/authTypes';
import { GET_ORDERS_FOR_USER_SUCCESS } from './../constants/orderConstants';


export const createOrder = (order: Order): ThunkAction<void, RootState, null, OrderAction | CartAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_ORDER_REQUEST
      })
      await firebase.firestore().collection('/orders').doc(order.id).set(order);
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: order
      });
      const { data } = await axios.post(`${ServerBaseUrlProd}/email/send-order-mail`, {
        date: new Date(order.create_time).toLocaleString(),
        firstName: order.firstName,
        amount: order.amount,
        orderItems: order.orderItems,
        city: order.city,
        address: order.address,
        floor: order.floor,
        email: order.email,
        orderMethod: order.orderMethod,
        apartmentNumber: order.apartmentNumber,
        orderNotes: order.orderNotes,
        phoneNumber: order.phoneNumber,
      });


      dispatch(popupMessage({ type: 'success', content: "Order Completed!" }));

      dispatch({ type: CLEAR_CART });

    } catch (err) {
      console.log('err', err);
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: err.message
      });
      dispatch(popupMessage({ type: 'error', content: "Order Failed" }))

    }
  }
}
export const getOrdersForUser = (): ThunkAction<void, RootState, null, OrderAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ORDERS_FOR_USER_REQUEST
      })
      const {
        userLogin
      } = getState();

      const { user }: { user: User } = userLogin;
      let userId;
      if (user && user.id) {
        userId = user.id;
      }

      const orders = await firebase.firestore().collection('orders').where('userId', '==', userId)
        .get();
      if (orders.empty) {
        dispatch({
          type: GET_ORDERS_FOR_USER_SUCCESS,
          payload: []
        });
      } else {
        let ordersFromDb: Order [] = [];
        orders.forEach(doc => {
          ordersFromDb.push(doc.data() as Order);
        });
        dispatch({
          type: GET_ORDERS_FOR_USER_SUCCESS,
          payload: ordersFromDb
        });

      }

    } catch (err) {
      console.log('err', err);
      dispatch({
        type: GET_ORDERS_FOR_USER_FAIL,
        payload: 'get orders failed'
      });
    }
  }
}









