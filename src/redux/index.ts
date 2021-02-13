import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {userLoginReducer, userRegisterReducer} from './reducers/authReducer';
import { popupMessageReducer } from './reducers/popupMessageReducer';
import { getTablesReducer, reservationAvailabilityReducer,bookTableReducer } from './reducers/reservationReducer';

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin:userLoginReducer,
  popupMessage:popupMessageReducer,
  reservationAvailability:reservationAvailabilityReducer,
  getTables:getTablesReducer,
  bookTable:bookTableReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;