import React, { useContext, useEffect, useState } from 'react';
import useAutoLogin from './hooks/use-autoLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { HomePage, AuthPage, BookTablePage, MenuPage } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux';
import PrivateRoute from './auth/PrivateRoute';
import PrivateAlreadyAuthRoute from './auth/PrivateAlereadyAuthRoute';
import PopupMessage from './components/popup-message/PopupMessage';
import Navbar from './components/navbar/Navbar';
import MenuItemPopup from './components/menu-item-popup/MenuItemPopup';
import { getAllProducts } from './redux/actions/productsActions';



function App() {
  const dispatch = useDispatch();
  useAutoLogin();
  useEffect(() => {
    dispatch(getAllProducts())
  })
  const { error, user, loading } = useSelector((state: RootState) => state.userLogin);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Router>
        <Navbar user={user} toggleSidebar={toggleSidebar} />
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} user={user} />
        <PopupMessage />
        <MenuItemPopup />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <PrivateAlreadyAuthRoute path='/auth' component={AuthPage} />
          <Route path='/book-table' component={BookTablePage} />
          <Route path='/menu' component={MenuPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
