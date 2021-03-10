import { USER_LOGOUT } from '../constants/authConstants';
import { SET_RESERVATION_DATA, CLEAR_RESERVATION_DATA, GET_TABLES_FAIL, GET_TABLES_SUCCESS, GET_TABLES_REQUEST, BOOK_TABLE_REQUEST, BOOK_TABLE_SUCCESS, BOOK_TABLE_FAIL, GET_RESERVATIONS_FOR_USER_SUCCESS, SET_RESERVATION_DATA_FROM_CHATBOT, SET_TABLE_FROM_CHATBOT, CLEAR_RESERVATION_DATA_FROM_CHATBOT, CLEAR_TABLE_FROM_CHATBOT, BOOK_TABLE_SUCCESS_FROM_CHATBOT } from '../constants/reservationConstants';
import { ReservationAction, ReservationData, TableData, ReservationDataFromDb } from '../types/reservationTypes';
import { GET_RESERVATIONS_FOR_USER_REQUEST, GET_RESERVATIONS_FOR_USER_FAIL } from './../constants/reservationConstants';


export const BookTableDataFromChatbotReducer = (state: { reservationData: ReservationData | null, table: TableData | null } = { reservationData: null, table: null }, action: ReservationAction) => {
  switch (action.type) {
    case SET_RESERVATION_DATA_FROM_CHATBOT:
      return {
        ...state,
        reservationData: action.payload
      }
    case SET_TABLE_FROM_CHATBOT:
      return {
        ...state,
        table: action.payload
      }
    case CLEAR_RESERVATION_DATA_FROM_CHATBOT:
      return {
        ...state,
        reservationData: null
      }
        ;
    case CLEAR_TABLE_FROM_CHATBOT:
      return {
        ...state,
        table: null
      }
    // case BOOK_TABLE_SUCCESS:
    //   return { name: '', partySize: 0, email: "", phoneNumber: "", time: "", date: "" }

    case USER_LOGOUT:
      return {}
    default:
      return state;
  }
}

export const reservationAvailabilityReducer = (state: ReservationData = { name: '', partySize: 0, email: "", phoneNumber: "", time: "", date: "", }, action: ReservationAction) => {
  switch (action.type) {
    case SET_RESERVATION_DATA:
      return {
        reservationData: action.payload
      }
    case CLEAR_RESERVATION_DATA:
      return { name: '', partySize: 0, email: "", phoneNumber: "", time: "", date: "" }
    case BOOK_TABLE_SUCCESS:
      return { name: '', partySize: 0, email: "", phoneNumber: "", time: "", date: "" }

    case USER_LOGOUT:
      return { name: '', partySize: 0, email: "", phoneNumber: "", time: "", date: "" }
    default:
      return state;
  }
}
export const getTablesReducer = (state: TableData[] = [], action: ReservationAction) => {
  switch (action.type) {
    case GET_TABLES_REQUEST:
      return {
        loading: true
      }
    case GET_TABLES_SUCCESS:
      return { tables: action.payload, loading: false }
    case GET_TABLES_FAIL:
      return { error: 'failed to get tables', loading: false }
    case USER_LOGOUT:
      return []
    default:
      return state;
  }
}
export const bookTableReducer = (state: { loading: boolean, reservationData: ReservationData, reservationDataFromChatbot: ReservationData, error: string } = { loading: false, reservationData: null, reservationDataFromChatbot: null, error: '' }, action: ReservationAction) => {
  switch (action.type) {
    case BOOK_TABLE_REQUEST:
      return {
        loading: true
      }
    case BOOK_TABLE_SUCCESS:
      return { reservationData: action.payload, loading: false }
    case BOOK_TABLE_SUCCESS_FROM_CHATBOT:
      return { reservationDataFromChatbot: action.payload, loading: false }
    case BOOK_TABLE_FAIL:
      return { error: 'failed to book table', loading: false }
    case CLEAR_RESERVATION_DATA:
      return { loading: false, reservationData: null, error: '' }
    case USER_LOGOUT:
      return { loading: false, reservationData: null, error: '' }
    default:
      return state;
  }
}
export const getReservationForUserReducer = (state: { loading: boolean, reservationData: ReservationDataFromDb, error: string } = { loading: false, reservationData: null, error: '' }, action: ReservationAction) => {
  switch (action.type) {
    case GET_RESERVATIONS_FOR_USER_REQUEST:
      return {
        loading: true
      }
    case GET_RESERVATIONS_FOR_USER_SUCCESS:
      return { reservationData: action.payload, loading: false }
    case GET_RESERVATIONS_FOR_USER_FAIL:
      return { error: 'Failed to get reservations', loading: false }
    case USER_LOGOUT:
      return { loading: false, reservationData: null, error: '' }
    default:
      return state;
  }
}


