import { ProductsAction, MenuItemsState, MenuItem } from '../types/productsType';
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST } from '../constants/productsConstants';
import { GET_PRODUCTS_SUCCESS, GET_BESTSELLERS_REQUEST, GET_BESTSELLERS_SUCCESS, GET_BESTSELLERS_FAIL, SET_SELECTED_ITEM_FOR_POPUP, REMOVE_SELECTED_ITEM_FROM_POPUP } from './../constants/productsConstants';

export const productPopupReducer = (state: { menuItem: MenuItem, fromChatbot: boolean } = { menuItem: { id: '', image: '', price: 0, title: '', description: '', type: '', bestSeller: '' }, fromChatbot: false }, action: ProductsAction) => {
  switch (action.type) {
    case SET_SELECTED_ITEM_FOR_POPUP:
      return {
        menuItem: action.payload.menuItem,
        fromChatbot: action.payload.fromChatbot
      }
    case REMOVE_SELECTED_ITEM_FROM_POPUP:
      return {
        menuItem: { id: '', image: '', price: 0, title: '', description: '', type: '', bestSeller: '' },
        fromChatbot: false

      }
    default:
      return state;
  }

}
export const allProductsReducer = (state: MenuItemsState = { menuItems: [], loading: false, error: "" }, action: ProductsAction) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        menuItems: [], loading: true, error: ''
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        menuItems: action.payload,
        loading: false,
        error: ''
      }
    case GET_PRODUCTS_FAIL:
      return {
        menuItems: [], loading: false, error: 'failed to get products'
      }
    default:
      return state;
  }

}

export const bestSellersReducer = (state: MenuItemsState = { menuItems: [], loading: false, error: "" }, action: ProductsAction) => {
  switch (action.type) {
    case GET_BESTSELLERS_REQUEST:
      return {
        menuItems: [], loading: true, error: ''
      }
    case GET_BESTSELLERS_SUCCESS:
      return {
        menuItems: action.payload,
        loading: false,
        error: ''
      }
    case GET_BESTSELLERS_FAIL:
      return {
        menuItems: [], loading: false, error: 'failed to get best sellers'
      }
    default:
      return state;
  }
}



