import { ThunkAction } from 'redux-thunk';
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, RESET_ERROR, USER_LOGOUT, SET_USER, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, DELETE_USER_SUCCESS } from '../constants/authConstants';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';
import { User, SignUpData, AuthAction } from './../types/authTypes';
import { popupMessage } from './popupMessageAction';
import { SignInData } from '../types/authTypes';
import { DELETE_USER_REQUEST, DELETE_USER_FAIL } from './../constants/authConstants';


export const deleteUser = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_USER_REQUEST
      })
      const {
        userLogin
      } = getState();
      const { user }: { user: User } = userLogin;
      let userId;
      if (user && user.id) {
        userId = user.id;
      }
      await firebase.firestore().collection('/users').doc(userId).delete();
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: 'Successfully Deleted your account'
      });

      dispatch(popupMessage({ type: 'error', content: "Successfully Deleted your account" }))
      dispatch({
        type: USER_LOGOUT
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETE_USER_FAIL,
        payload: "Failed to delete your account"
      });
      dispatch(popupMessage({ type: 'error', content: "Failed to delete your account" }))

    }
  }
}

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
          name: data.name,
          id: res.user.uid,
        };
        await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: 'Successfully registered'
        });
        dispatch({
          type: SET_USER,
          payload: userData
        });
        dispatch(popupMessage({ type: 'success', content: "Successfully Registered" }))

        localStorage.setItem('token', JSON.stringify(userData.id));
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err.message
      });
      dispatch(popupMessage({ type: 'error', content: "Registration Failed" }))

    }
  }
}
export const signInUserWithGoogle = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
      let provider = new staticFireBase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider)
      let user = result.user;
      if (user) {
        const userData: User = {
          email: user.email,
          name: user.displayName,
          id: user.uid,
        };
        const isUserAlreadyExistInDb = await firebase.firestore().collection('users').where('email', '==', user.email)
          .get();
        if (isUserAlreadyExistInDb.empty) {
          await firebase.firestore().collection('/users').doc(user.uid).set(userData);
          dispatch({
            type: SET_USER,
            payload: userData
          });
          dispatch(popupMessage({ type: 'success', content: "Successfully Logged in" }))

          localStorage.setItem('token', JSON.stringify(userData.id));


        } else {
          let userData;
          isUserAlreadyExistInDb.forEach(doc => {
            userData = doc.data();
          });
          dispatch({
            type: SET_USER,
            payload: userData
          });
          dispatch(popupMessage({ type: 'success', content: "Successfully Logged in" }))
          localStorage.setItem('token', JSON.stringify(userData.id));

        }
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.message
      });
      dispatch(popupMessage({ type: 'error', content: error.message }))

    }
  }

}
export const signInUserWithFacebook = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      let provider = new staticFireBase.auth.FacebookAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider)
      let user = result.user;
      if (user) {
        const userData: User = {
          email: user.email,
          name: user.displayName,
          id: user.uid,
        };
        const isUserAlreadyExistInDb = await firebase.firestore().collection('users').where('email', '==', user.email)
          .get();
        if (isUserAlreadyExistInDb.empty) {
          await firebase.firestore().collection('/users').doc(user.uid).set(userData);
          dispatch({
            type: SET_USER,
            payload: userData
          });
          dispatch(popupMessage({ type: 'success', content: "Successfully Logged in" }))
          localStorage.setItem('token', JSON.stringify(userData.id));

        } else {
          let userData;
          isUserAlreadyExistInDb.forEach(doc => {
            userData = doc.data();
          });
          dispatch({
            type: SET_USER,
            payload: userData
          });
          dispatch(popupMessage({ type: 'success', content: "Successfully Logged in" }))

          localStorage.setItem('token', JSON.stringify(userData.id));


        }
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.message
      });
      dispatch(popupMessage({ type: 'error', content: error.message }))

    }
  }

}

export const getAuthUser = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const user = await firebase.firestore().collection('users').doc(id).get();
      if (user.exists) {
        const userData = user.data() as User;

        dispatch({
          type: SET_USER,
          payload: userData
        });
        localStorage.setItem('token', JSON.stringify(userData.id));
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: 'User login failed, please try again later'
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.message
      });
    }
  }
}

export const loginUser = (userInfo: SignInData): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const user = await firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password);
      console.log(user)
      const userFromDb = await firebase.firestore().collection('users').doc(user.user.uid).get();
      console.log(userFromDb.exists)
      if (userFromDb.exists) {
        const userData = userFromDb.data() as User;

        dispatch({
          type: SET_USER,
          payload: userData
        });
        localStorage.setItem('token', JSON.stringify(userData.id));
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: 'User login failed, please try again later'
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err.message
      });
      dispatch(popupMessage({ type: 'error', content: err.message }))

    }
  }
}



// Log out
export const logOut = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem('token');
      dispatch({
        type: USER_LOGOUT
      });
      dispatch(popupMessage({ type: 'error', content: 'Successfully logged out' }))

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
