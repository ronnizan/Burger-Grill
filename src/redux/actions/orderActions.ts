import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';
import { popupMessage } from './popupMessageAction';
import { CLEAR_CART } from '../constants/cartConstants';
import { Order, OrderAction } from '../types/orderTypes';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_FAIL, CREATE_ORDER_SUCCESS } from '../constants/orderConstants';
import axios from 'axios';
import { CartAction } from '../types/cartTypes';
import { ServerBaseUrl } from './../constants/endPoints';


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
      const { data } = await axios.post(`${ServerBaseUrl}/email/send-order-mail`, {
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


      dispatch(popupMessage({ type: 'success', content: "Order Received" }));

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






// export const loginUser = (userInfo:SignInData): ThunkAction<void, RootState, null, AuthAction> => {
//   return async dispatch => {
//     try {
//       dispatch({
//         type: USER_LOGIN_REQUEST,
//       });
//       const user = await firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password);
//       console.log(user)
//       const userFromDb = await firebase.firestore().collection('users').doc(user.user.uid).get();
//       console.log(userFromDb.exists)
//       if (userFromDb.exists) {
//         const userData = userFromDb.data() as User;

//         dispatch({
//           type: SET_USER,
//           payload: userData
//         });
//         localStorage.setItem('token', JSON.stringify(userData.id));
//       } else {
//         dispatch({
//           type: USER_LOGIN_FAIL,
//           payload: 'User login failed, please try again later'
//         });
//       }
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: USER_LOGIN_FAIL,
//         payload: err.message
//       });
//       dispatch(popupMessage({type: 'error',content:err.message}))

//     }
//   }
// }




