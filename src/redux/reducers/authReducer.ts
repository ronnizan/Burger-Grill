import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, SET_USER, DELETE_USER_SUCCESS } from '../constants/authConstants';
import { AuthAction } from '../types/authTypes';
import { User } from './../types/authTypes';
import { DELETE_USER_REQUEST, DELETE_USER_FAIL } from './../constants/authConstants';


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

export const userDeleteReducer = (state: { error: string, successMsg: string, loading: boolean } = { error: '', successMsg: '', loading: false }, action: AuthAction) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true
      }
    case DELETE_USER_SUCCESS:
      return {
        loading: false, successMsg: action.payload
      }
    case DELETE_USER_FAIL:
      return {
        error: '', successMsg: '', loading: false
      }
    case USER_LOGOUT:
      return {
        error: '', successMsg: '', loading: false
      }
    default:
      return state;
  }
}


