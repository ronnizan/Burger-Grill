import { error } from 'console';
import React, { useContext, useEffect, useState } from 'react';
import useAuthListener from './hooks/use-auth-listener';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { HomePage } from './pages';


function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/reports' component={Reports} /> */}
          {/* <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
