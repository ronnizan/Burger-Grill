import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import { GlobalStyles } from "./global-styles";


ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
