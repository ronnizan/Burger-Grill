import React, { useContext, useEffect, useState } from 'react';
import useAuthListener from './hooks/use-auth-listener';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { HomePage } from './pages';
import AuthPage from './pages/auth';


function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Sidebar />
        {user && JSON.stringify(user)}
        {/* {!user && 'no'} */}
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/auth' component={AuthPage} />
          {/* <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
