import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, RESET_ERROR, USER_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, SET_USER } from '../constants/authConstants';
import { AuthAction } from '../types/authTypes';
import { User } from './../types/authTypes';


export const userRegisterReducer = (state = { error: '', successMessage: null, loading: false }, action: AuthAction) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false, successMessage: action.payload
      }

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT:
      return {
        error: '', successMessage: null, loading: false
      }
    default:
      return state;
  }
}

export const userLoginReducer = (state: { error: string, user: User, loading: boolean } = { error: '', user: null, loading: false }, action: AuthAction) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false, user: action.payload
      }
    case SET_USER:
      return {
        loading: false, user: action.payload
      }

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT:
      return {
        error: '', user: null, loading: false
      }
    default:
      return state;
  }
}


