import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import { popupMessage } from './popupMessageAction';
import { ReservationData, TableData } from './../types/reservationTypes';
import { ReservationAction } from '../types/reservationTypes';
import { SET_RESERVATION_DATA, CLEAR_RESERVATION_DATA, GET_TABLES_REQUEST, GET_TABLES_SUCCESS, GET_TABLES_FAIL, BOOK_TABLE_FAIL, BOOK_TABLE_SUCCESS, GET_RESERVATIONS_FOR_USER_REQUEST, GET_RESERVATIONS_FOR_USER_FAIL } from './../constants/reservationConstants';
import { BOOK_TABLE_REQUEST, GET_RESERVATIONS_FOR_USER_SUCCESS } from '../constants/reservationConstants';
import { User } from './../types/authTypes';
import axios from 'axios';
import { ServerBaseUrl } from '../constants/endPoints';

export const getReservationsForUser = (): ThunkAction<void, RootState, null, ReservationAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_RESERVATIONS_FOR_USER_REQUEST
      })
      const {
        userLogin
      } = getState();

      const { user }: { user: User } = userLogin;
      let userId;
      if (user && user.id) {
        userId = user.id;
      }
      
      const isReservationAlreadyExists = await firebase.firestore().collection('/reservations').doc(userId && userId).get();
      if (isReservationAlreadyExists.exists) {
        //convert into array the reservations
        const reservations = Object.values(isReservationAlreadyExists.data())
        //convert into object all the reservations, firebase not accepting arrays
        dispatch({
          type: GET_RESERVATIONS_FOR_USER_SUCCESS,
          payload:reservations
        })
      } else {
        dispatch({
          type: GET_RESERVATIONS_FOR_USER_SUCCESS,
          payload:[]
        })
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_RESERVATIONS_FOR_USER_FAIL,
        payload: err.message
      });
    }
  }
}


export const bookTable = ({ date, table, time, partySize, email, name }: { date: string, time: string, table: TableData, partySize: number, email: string, name: string }): ThunkAction<void, RootState, null, ReservationAction> => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: BOOK_TABLE_REQUEST
      })
      const {
        userLogin
      } = getState();

      const { user }: { user: User } = userLogin;
      let userId;
      if (user && user.id) {
        userId = user.id;
      }
      const isDateAndTimeAlreadyInDb = await firebase.firestore().collection('/tableBookingByDate').doc(date + " " + time).get();
      if (isDateAndTimeAlreadyInDb.exists) {
        const tables = Object.values(isDateAndTimeAlreadyInDb.data())
        const findTable = tables.find(t => t.name === table.name);
        findTable.isAvailable = false;
        const tablesToSaveInDb = Object.assign({}, tables);
        await firebase.firestore().collection('/tableBookingByDate').doc(date + " " + time).set(tablesToSaveInDb);
        dispatch({
          type: GET_TABLES_SUCCESS,
          payload: tables
        });
      } else {
        const tablesSnapshot = await firebase.firestore().collection('tables').get();
        const tables = tablesSnapshot.docs.map(contentObj => ({ ...contentObj.data() })) as TableData[];
        const findTable = tables.find(t => t.name === table.name);
        findTable.isAvailable = false;
        const tablesToSaveInDb = Object.assign({}, tables);
        await firebase.firestore().collection('/tableBookingByDate').doc(date + " " + time).set(tablesToSaveInDb);
        dispatch({
          type: GET_TABLES_SUCCESS,
          payload: tables
        });
      }

      const reservationData = { date, time, partySize, email, name, table }
      const isReservationAlreadyExists = await firebase.firestore().collection('/reservations').doc(userId && userId).get();
      if (isReservationAlreadyExists.exists) {
        //convert into array the pervious reservations
        const reservations = Object.values(isReservationAlreadyExists.data())
        // push the latest reservation
        reservations.push({ ...reservationData })

        //convert into object all the reservations, firebase not accepting arrays
        const reservationsToSaveInDb = Object.assign({}, reservations);

        await firebase.firestore().collection('/reservations').doc(userId ? userId : date + " " + time + " " + table.name).set(reservationsToSaveInDb);
      } else {
        
        await firebase.firestore().collection('/reservations').doc(userId ? userId : date + " " + time + table.name).set({ 0: reservationData });
      }
      dispatch({
        type: BOOK_TABLE_SUCCESS,
        payload: reservationData
      });
    
      const { data } = await axios.post(`${ServerBaseUrl}/email/send-reservation-mail`, {
        email: reservationData.email,
        name: reservationData.name,
        date: reservationData.date,
        time: reservationData.time,
        partySize:reservationData.partySize,  
        table: reservationData.table,
      });
      
      dispatch(popupMessage({ type: 'success', content: "Table Booked!" }))


    } catch (err) {
      console.log(err);
      dispatch({
        type: BOOK_TABLE_FAIL,
        payload: err.message
      });
      dispatch(popupMessage({ type: 'error', content: "Failed to Book a table" }))

    }
  }
}





export const getTables = (date, time): ThunkAction<void, RootState, null, ReservationAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_TABLES_REQUEST,
      });


      const isDateAndTimeAlreadyInDb = await firebase.firestore().collection('/tableBookingByDate').doc(date + " " + time).get();
      if (isDateAndTimeAlreadyInDb.exists) {
        const tables = Object.values(isDateAndTimeAlreadyInDb.data())
        dispatch({
          type: GET_TABLES_SUCCESS,
          payload: tables
        });
      } else {
        const tablesSnapshot = await firebase.firestore().collection('tables').get();
        const tables = tablesSnapshot.docs.map(contentObj => ({ ...contentObj.data() })) as TableData[]
        dispatch({
          type: GET_TABLES_SUCCESS,
          payload: tables
        });
      }
     
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_TABLES_FAIL,
      });
    }
  }
}

export const setReservationData = (data: ReservationData): ThunkAction<void, RootState, null, ReservationAction> => {
  return async dispatch => {

    dispatch({
      type: SET_RESERVATION_DATA,
      payload: data
    })
  }
}
export const clearReservationData = (data: ReservationData): ThunkAction<void, RootState, null, ReservationAction> => {
  return async dispatch => {

    dispatch({
      type: CLEAR_RESERVATION_DATA
    })

  }
}

