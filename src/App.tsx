import React, { useContext, useEffect, useState } from 'react';
import useAutoLogin from './hooks/use-autoLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { HomePage } from './pages';
import AuthPage from './pages/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux';
import PrivateRoute from './auth/PrivateRoute';
import PrivateAlreadyAuthRoute from './auth/PrivateAlereadyAuthRoute';
import PopupMessage from './components/popup-message/PopupMessage';
import BookTablePage from './pages/bookTable';



function App() {
  useAutoLogin();
  const { error, user, loading } = useSelector((state: RootState) => state.userLogin);

  return (
    <>
      <Router>
        <Sidebar user={user} />
        <PopupMessage/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <PrivateAlreadyAuthRoute path='/auth' component={AuthPage} />
          <Route path='/book-table' component={BookTablePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
