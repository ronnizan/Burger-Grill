import { ThunkAction } from 'redux-thunk';
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, User, RESET_ERROR, USER_LOGOUT, SignUpData, AuthAction } from '../types/authTypes';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';

export const signUpUser = (data: SignUpData): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST
      })

      const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData: User = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: staticFireBase.firestore.FieldValue.serverTimestamp()
        };
        await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: userData
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.message
      });
    }
  }
}

// Get user by id
// export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
//   return async dispatch => {
//     try {
//       const user = await firebase.firestore().collection('users').doc(id).get();
//       if(user.exists) {
//         const userData = user.data() as User;
//         dispatch({
//           type: SET_USER,
//           payload: userData
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// Set loading
// export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
//   return dispatch => {
//     dispatch({
//       type: SET_LOADING,
//       payload: value
//     });
//   }
// }

// Log in
// export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
//   return async dispatch => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
//     } catch (err) {
//       console.log(err);
//       onError();
//       dispatch(setError(err.message));
//     }
//   }
// }

// Log out
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      await firebase.auth().signOut();
      dispatch({
        type: USER_LOGOUT
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// Set error
export const setError = (): ThunkAction<void, RootState, null, AuthAction> => {
  return dispatch => {
    dispatch({
      type: RESET_ERROR,
    });
  }
}

// Set need verification
// export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => {
//   return dispatch => {
//     dispatch({
//       type: NEED_VERIFICATION
//     });
//   }
// }

// Set success
// export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
//   return dispatch => {
//     dispatch({
//       type: SET_SUCCESS,
//       payload: msg
//     });
//   }
// }

// Send password reset email
// export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => {
//   return async dispatch => {
//     try {
//       await firebase.auth().sendPasswordResetEmail(email);
//       dispatch(setSuccess(successMsg));
//     } catch (err) {
//       console.log(err);
//       dispatch(setError(err.message));
//     }
//   }
// }