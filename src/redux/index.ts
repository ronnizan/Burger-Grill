import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer, userRegisterReducer, userDeleteReducer } from './reducers/authReducer';
import { popupMessageReducer } from './reducers/popupMessageReducer';
import { getTablesReducer, reservationAvailabilityReducer,bookTableReducer, getReservationForUserReducer } from './reducers/reservationReducer';
import { cartReducer, cartChatbotReducer } from './reducers/cartReducer';
import { allProductsReducer, bestSellersReducer, productPopupReducer } from './reducers/productsReducer';
import { creatOrderReducer, getOrdersForUserReducer } from './reducers/orderReducer';
import { chatbotReducer } from './reducers/chatbotReducer';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin:userLoginReducer,
  userDelete:userDeleteReducer,
  popupMessage:popupMessageReducer,
  reservationAvailability:reservationAvailabilityReducer,
  getTables:getTablesReducer,
  bookTable:bookTableReducer,
  getReservationForUser:getReservationForUserReducer,
  cart:cartReducer,
  cartChatbot:cartChatbotReducer,
  allProducts:allProductsReducer,
  bestSellers:bestSellersReducer,  
  productPopup:productPopupReducer,
  creatOrder:creatOrderReducer,
  getOrdersForUser:getOrdersForUserReducer,
  chatbot:chatbotReducer
});


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;