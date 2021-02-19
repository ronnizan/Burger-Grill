import { ThunkAction } from 'redux-thunk';
import { RESET_ERROR, USER_LOGOUT } from '../constants/authConstants';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';
import { popupMessage } from './popupMessageAction';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../constants/cartConstants';
import { RegularCartItem, BurgerCartItem, MealCartItem, Cart, CartAction } from '../types/cartTypes';


export const addItemToCart = (cartItem: RegularCartItem | BurgerCartItem | MealCartItem): ThunkAction<void, RootState, null, CartAction> => {
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

// export const signUpUser = (data: SignUpData): ThunkAction<void, RootState, null, AuthAction> => {
//   return async dispatch => {
//     try {
//       dispatch({
//         type: USER_REGISTER_REQUEST
//       })
//       const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
//       if (res.user) {
//         const userData: User = {
//           email: data.email,
//           name: data.name,
//           id: res.user.uid,
//         };
//         await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
//         dispatch({
//           type: USER_REGISTER_SUCCESS,
//           payload: 'Successfully registered'
//         });
//         dispatch({
//           type: SET_USER,
//           payload: userData
//         });
//         dispatch(popupMessage({type: 'success',content:"Successfully Registered"}))

//         localStorage.setItem('token', JSON.stringify(userData.id));
//       }
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: USER_REGISTER_FAIL,
//         payload: err.message
//       });
//       dispatch(popupMessage({type: 'error',content:"Registration Failed"}))

//     }
//   }
// }

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




