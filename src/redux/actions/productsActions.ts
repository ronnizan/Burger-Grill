import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import firebase from '../../firebase/firebaseConfig';
import staticFireBase from 'firebase';
import { GET_BESTSELLERS_REQUEST, GET_PRODUCTS_REQUEST } from '../constants/productsConstants';
import { ProductsAction, MenuItem } from '../types/productsType';
import { GET_BESTSELLERS_SUCCESS, GET_BESTSELLERS_FAIL, GET_PRODUCTS_SUCCESS, SET_SELECTED_ITEM_FOR_POPUP, REMOVE_SELECTED_ITEM_FROM_POPUP } from './../constants/productsConstants';


export const selectItemForPopup = (menuItem: MenuItem): ThunkAction<void, RootState, null, ProductsAction> => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_ITEM_FOR_POPUP,
      payload: menuItem
    });
  }
}
export const removeItemFromPopup = (): ThunkAction<void, RootState, null, ProductsAction> => {
  return dispatch => {
    dispatch({
      type: REMOVE_SELECTED_ITEM_FROM_POPUP,
    });
  }
}


export const getBestSellersProducts = (): ThunkAction<void, RootState, null, ProductsAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_BESTSELLERS_REQUEST,
      });
      const products = await firebase.firestore().collection('/menuItems').where('bestSeller', '==', true).get();

      dispatch({
        type: GET_BESTSELLERS_SUCCESS,
        payload: products.docs.map(product => product.data() as MenuItem)
      })
    }
    catch (error) {
      dispatch({
        type: GET_BESTSELLERS_FAIL,
      })
    }

  }
}
export const getAllProducts = (): ThunkAction<void, RootState, null, ProductsAction> => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_PRODUCTS_REQUEST,
      });
      const products = await firebase.firestore().collection('/menuItems').get();
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: products.docs.map(product => product.data() as MenuItem)
      })
    } catch (error) {
      dispatch({
        type: GET_BESTSELLERS_FAIL,
      })
    }


  }
}

