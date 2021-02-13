import React, { FC, useState, FormEvent, useEffect } from 'react';
import AuthForm from '../components/auth-form/AuthForm';


const Auth: FC = () => {

// const [firstName, setFirstName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const dispatch = useDispatch();
// const { error, user, loading } = useSelector((state: RootState) => state.userRegister);

// useEffect(() => {
//   return () => {
//     if (error) {
//       dispatch(setError());
//     }
//   }
// }, [error, dispatch]);      

// const submitHandler = (e: FormEvent) => {
//   e.preventDefault();
//   if (error) {
//     dispatch(setError());
//   }
//   // dispatch(signUpUser({ email, password, firstName }));
//   dispatch(signUpUser({ email: 'ronn@wedas.com', password: '1111111', firstName: 'firstName' }));
// }

  return (
    <AuthForm></AuthForm>
  );
}

export default Auth;   