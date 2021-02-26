import React, { useState } from 'react';
import { signInUserWithGoogle, signInUserWithFacebook, loginUser, signUpUser } from '../../redux/actions/authActions';
import { AuthFormSection, AuthFormContainer, Form, MainForm, SideForm, AuthFormTitle, IconsWrapper, FacebookIcon, GoogleIcon, SubTitle, Input, SubmitButton, SwitchButton } from './AuthForm-style';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const [current, setCurrent] = useState('signIn');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email: signUpEmail, password: signUpPassword, name: signUpName }))
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: signInEmail, password: signInPassword }))
  }

  return (
    <>
      <AuthFormSection>
        <AuthFormContainer>
          {current === 'signIn' && <Form onSubmit={handleSignIn}>
            <MainForm>
              <AuthFormTitle isSideForm={false}>Sign In</AuthFormTitle>
              <IconsWrapper>
                <FacebookIcon onClick={() => {
                  dispatch(signInUserWithFacebook())
                }}></FacebookIcon>
                <GoogleIcon onClick={() => {
                  dispatch(signInUserWithGoogle())
                }}></GoogleIcon>
              </IconsWrapper>
              <SubTitle>or use your email account</SubTitle>
              <Input onChange={(e) => {
                setSignInEmail(e.target.value)
              }} placeholder="Email" type="email"></Input>
              <Input onChange={(e) => {
                setSignInPassword(e.target.value)
              }} placeholder="Password" type="password"></Input>
              <SubmitButton>
                SIGN IN
            </SubmitButton>
            </MainForm>
            <SideForm>
              <AuthFormTitle isSideForm={true}>Hello, Friend!</AuthFormTitle>
              <SubTitle>Enter your personal details and start a journey full of discounts with us</SubTitle>
              <SwitchButton onClick={() => {
                setCurrent('signUp')
              }} type="button">Sign Up</SwitchButton>
            </SideForm>
          </Form>}
          {current === 'signUp' && <Form onSubmit={handleSignUp}>
            <MainForm>
              <AuthFormTitle isSideForm={false}>Create Account
            </AuthFormTitle>
              <IconsWrapper>
                <FacebookIcon onClick={() => {
                  dispatch(signInUserWithFacebook())
                }}></FacebookIcon>
                <GoogleIcon onClick={() => {
                  dispatch(signInUserWithGoogle())
                }}></GoogleIcon>
              </IconsWrapper>
              <SubTitle>or use your email for  registration</SubTitle>
              <Input onChange={(e) => {
                setSignUpName(e.target.value)
              }} placeholder="Name" type="text"></Input>
              <Input onChange={(e) => {
                setSignUpEmail(e.target.value)
              }} placeholder="Email" type="email"></Input>
              <Input onChange={(e) => {
                setSignUpPassword(e.target.value)
              }} placeholder="Password" type="password"></Input>
              <SubmitButton>
                SIGN Up
            </SubmitButton>
            </MainForm>
            <SideForm>
              <AuthFormTitle isSideForm={true}>Welcome Back!</AuthFormTitle>
              <SubTitle>To keep you connected with us please login with your personal info</SubTitle>
              <SwitchButton onClick={() => {
                setCurrent('signIn')
              }} type="button">Sign In</SwitchButton>
            </SideForm>
          </Form>}

        </AuthFormContainer>
      </AuthFormSection>
    </>);
};

export default AuthForm;
