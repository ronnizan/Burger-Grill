import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../redux';

interface Props extends RouteProps {
  component: any;
}


const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state: RootState) => state.userLogin);

  return(
    <Route {...rest} render={props => user ? <Component {...props} /> : <Redirect to="/auth" />} />
  );
}

export default PrivateRoute;