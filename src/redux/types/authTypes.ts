import { RESET_ERROR, SET_USER, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, DELETE_USER_SUCCESS } from '../constants/authConstants';
import { DELETE_USER_REQUEST, DELETE_USER_FAIL } from './../constants/authConstants';
export interface User {
  name: string;
  email: string;
  id: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

interface UserActionRegisterRequest {
  type: typeof USER_REGISTER_REQUEST;
}
interface UserActionRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: string;
}
interface UserActionRegisterFail {
  type: typeof USER_REGISTER_FAIL;
  payload: string;
}
interface UserActionLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}
interface UserActionLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}
interface UserActionLoginFail {
  type: typeof USER_LOGIN_FAIL;
  payload: string;
}
interface UserDeleteRequest {
  type: typeof DELETE_USER_REQUEST;
}
interface UserDeleteSuccess {
  type: typeof DELETE_USER_SUCCESS;
  payload: string;
}
interface UserDeleteFail {
  type: typeof DELETE_USER_FAIL;
  payload: string;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SignOutAction {
  type: typeof USER_LOGOUT;
}

interface SetErrorAction {
  type: typeof RESET_ERROR;
}

export type AuthAction = UserActionRegisterRequest | UserActionRegisterSuccess | UserActionRegisterFail | UserActionLoginRequest | UserActionLoginSuccess | UserActionLoginFail |UserDeleteRequest|UserDeleteSuccess|UserDeleteFail| SetUserAction | SignOutAction | SetErrorAction;

