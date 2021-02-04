import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, setError, signout } from '../../redux/actions/authActions';
import { RootState } from '../../redux';
import { FormSection, FormContainer,Form,FormTitle,FormSubTitle } from './AuthForm-style'

const AuthForm: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error, user, loading } = useSelector((state: RootState) => state.userRegister);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError());
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError());
    }
    // dispatch(signUpUser({ email, password, firstName }));
    dispatch(signUpUser({ email: 'ronn@wedas.com', password: '1111111', firstName: 'firstName' }));
  }

  return (
    <FormSection>
      <FormContainer>
        <Form>
        <FormTitle>Sign Up</FormTitle>
        <FormTitle>Sign In</FormTitle>
        </Form>
      
      {/* <button onClick={(e) => submitHandler(e)}>in</button>
      <button onClick={() => dispatch(signout())}>out</button> */}
      </FormContainer>
    </FormSection>
  );
}

export default AuthForm;   