import { GET_BESTSELLERS_REQUEST, GET_BESTSELLERS_SUCCESS, GET_BESTSELLERS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_SELECTED_ITEM_FOR_POPUP, REMOVE_SELECTED_ITEM_FROM_POPUP } from './../constants/productsConstants';

export interface MenuItem {
  id: string
  image: string,
  price: number,
  title: string,
  description: string,
  type: string,
  bestSeller: boolean | string;
}

export interface MenuItemsState {
  menuItems: MenuItem[];
  loading: boolean
  error: string
}

interface GetBestSellersRequest {
  type: typeof GET_BESTSELLERS_REQUEST;
}
interface GetBestSellersSuccess {
  type: typeof GET_BESTSELLERS_SUCCESS;
  payload: MenuItem[]
}
interface GetBestSellersFail {
  type: typeof GET_BESTSELLERS_FAIL;
}

interface GetProductsRequest {
  type: typeof GET_PRODUCTS_REQUEST;
}
interface GetProductsSuccess {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: MenuItem[]
}
interface GetProductsFail {
  type: typeof GET_PRODUCTS_FAIL;
}

interface AddProductToOverlay {
  type: typeof SET_SELECTED_ITEM_FOR_POPUP;
  payload: MenuItem
}
interface RemoveProductFromOverlay {
  type: typeof REMOVE_SELECTED_ITEM_FROM_POPUP;
}


export type ProductsAction = GetBestSellersRequest | GetBestSellersSuccess | GetBestSellersFail | GetProductsRequest | GetProductsSuccess | GetProductsFail | AddProductToOverlay | RemoveProductFromOverlay;

