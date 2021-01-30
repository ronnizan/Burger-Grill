import { useState, useEffect, useContext } from 'react';
import  firebase from '../firebase/firebaseConfig';

export default function useAuthListener() {
  const userFromLocalStorage = localStorage.getItem('currentUser');
  const [user, setUser] = useState<any>(userFromLocalStorage? userFromLocalStorage: null);
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser:any) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {    
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);       

  return { user };   
}
   