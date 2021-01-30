import { AuthAction, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, RESET_ERROR, USER_LOGOUT } from '../types/authTypes';




export const userRegisterReducer = (state = { error: '', user: null, loading: false }, action: AuthAction) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false, user: action.payload
      }

    case USER_LOGOUT:
      return {
        error: '', user: null, loading: false
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}


