import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase/firebaseConfig';
import { RootState } from '../redux';
import { getAuthUser, logOut } from '../redux/actions/authActions';

export default function useAutoLogin() {
  const userFromLocalStorage = localStorage.getItem('currentUser');
  const dispatch = useDispatch();
  const { error, user, loading } = useSelector((state: RootState) => state.userLogin);
  // const [token, setToken] = useState<any>(userFromLocalStorage? userFromLocalStorage: null);
  useEffect(() => {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null;
    if (token && !loading) {
      dispatch(getAuthUser(token));
    }
  }, []);

}
