export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';


export const RESET_ERROR = 'RESET_ERROR';



export interface User {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

// export interface AuthState {
//   user: User | null;
//   authenticated: boolean;
//   loading: boolean;
//   error: string;
//   needVerification: boolean;
//   success: string;
// }

export interface SignUpData {
  firstName: string;
  email: string;
  password: string;
}

// export interface SignInData {
//   email: string;
//   password: string;
// }

// Actions
interface UserActionRequest {
  type: typeof USER_REGISTER_REQUEST;
}
interface UserActionSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: User;
}
interface UserActionFail {
  type: typeof USER_REGISTER_FAIL;
  payload: string;
}

// interface SetUserAction {
//   type: typeof USER_REGISTER_SUCCESS;
//   payload: User;
// }

// interface SetLoadingAction {
//   type: typeof SET_LOADING;
//   payload: boolean;
// }

interface SignOutAction {
  type: typeof USER_LOGOUT;
}

interface SetErrorAction {
  type: typeof RESET_ERROR;
}

// interface NeedVerificationAction {
//   type: typeof NEED_VERIFICATION;
// }

// interface SetSuccessAction {
//   type: typeof SET_SUCCESS;
//   payload: string;
// }

export type AuthAction = UserActionRequest | UserActionSuccess | UserActionFail | SignOutAction | SetErrorAction;

