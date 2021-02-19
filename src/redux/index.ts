import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {userLoginReducer, userRegisterReducer} from './reducers/authReducer';
import { popupMessageReducer } from './reducers/popupMessageReducer';
import { getTablesReducer, reservationAvailabilityReducer,bookTableReducer } from './reducers/reservationReducer';
import { cartReducer } from './reducers/cartReducer';
import { allProductsReducer, bestSellersReducer, productPopupReducer } from './reducers/productsReducer';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin:userLoginReducer,
  popupMessage:popupMessageReducer,
  reservationAvailability:reservationAvailabilityReducer,
  getTables:getTablesReducer,
  bookTable:bookTableReducer,
  cart:cartReducer,
  allProducts:allProductsReducer,
  bestSellers:bestSellersReducer,  
  productPopup:productPopupReducer
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;