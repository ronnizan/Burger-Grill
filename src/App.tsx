import React, {  useEffect, useState } from 'react';
import useAutoLogin from './hooks/use-autoLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { HomePage, AuthPage, BookTablePage, MenuPage,CartSummaryPage,CheckoutPage,ProfilePage } from './pages';
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
  const { user } = useSelector((state: RootState) => state.userLogin);
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
          <PrivateAlreadyAuthRoute path='/auth' component={AuthPage} exact />
          <Route path='/book-table' component={BookTablePage} exact/>
          <Route path='/order' component={MenuPage} exact/>
          <Route path='/cart' component={CartSummaryPage} exact/>
          <Route path='/checkout' component={CheckoutPage} exact/>
          <PrivateRoute path='/profile' component={ProfilePage} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
