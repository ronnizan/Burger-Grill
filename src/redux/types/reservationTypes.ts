import { USER_LOGOUT } from "../constants/authConstants";
import { SET_RESERVATION_DATA, CLEAR_RESERVATION_DATA, GET_TABLES_FAIL, GET_TABLES_SUCCESS, GET_TABLES_REQUEST, BOOK_TABLE_REQUEST, BOOK_TABLE_SUCCESS, BOOK_TABLE_FAIL, GET_RESERVATIONS_FOR_USER_SUCCESS } from '../constants/reservationConstants';
import { GET_RESERVATIONS_FOR_USER_REQUEST, GET_RESERVATIONS_FOR_USER_FAIL } from './../constants/reservationConstants';



export interface ReservationData {
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
  partySize: number;
}
export interface ReservationDataFromDb {
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
  partySize: number;
  table:TableData
}
export interface TableData {
  name: string;
  location: string;
  isAvailable: boolean;
  capacity: number;
}




interface SetReservationDataAction {
  type: typeof CLEAR_RESERVATION_DATA;
}
interface ClearReservationDataAction {
  type: typeof SET_RESERVATION_DATA;
  payload: ReservationData;
}


interface GetTablesRequestAction {
  type: typeof GET_TABLES_REQUEST;
}
interface GetTablesSuccessAction {
  type: typeof GET_TABLES_SUCCESS;
  payload: TableData[];
}
interface GetTablesFailAction {
  type: typeof GET_TABLES_FAIL;
}


interface BookTableRequestAction {
  type: typeof BOOK_TABLE_REQUEST;
}
interface BookTableSuccessAction {
  type: typeof BOOK_TABLE_SUCCESS;
  payload: any;
}
interface BookTableFailAction {
  type: typeof BOOK_TABLE_FAIL;
}

interface GetReservationsForUserRequestAction {
  type: typeof GET_RESERVATIONS_FOR_USER_REQUEST;
}
interface GetReservationsForUserSuccessAction {
  type: typeof GET_RESERVATIONS_FOR_USER_SUCCESS;
  payload: ReservationDataFromDb[];
}
interface GetReservationsForUserFailAction {
  type: typeof GET_RESERVATIONS_FOR_USER_FAIL;
}
interface SignOutAction {
  type: typeof USER_LOGOUT;
}




export type ReservationAction = SetReservationDataAction | ClearReservationDataAction | GetTablesRequestAction | GetTablesSuccessAction | GetTablesFailAction | BookTableRequestAction | BookTableSuccessAction | BookTableFailAction |GetReservationsForUserRequestAction|GetReservationsForUserSuccessAction|GetReservationsForUserFailAction| SignOutAction;

