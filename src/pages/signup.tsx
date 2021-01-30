import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, setError,signout } from '../redux/actions/authActions';
import { RootState } from '../redux';

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error,user,loading } = useSelector((state: RootState) => state.userRegister);

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError());
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      dispatch(setError());
    }
    // dispatch(signUpUser({ email, password, firstName }));
    dispatch(signUpUser({email: 'ronn@wedas.com',password: '1111111',firstName: 'firstName' }));
  }

  return(
    <section className="section">
      {error && error}
      {user && JSON.stringify(user)}
      <button onClick={(e)=>submitHandler(e)}>in</button>
      <button onClick={()=>dispatch(signout())}>out</button>
    </section>   
  );
}   

export default SignUp;   