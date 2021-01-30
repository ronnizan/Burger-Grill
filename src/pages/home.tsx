import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, setError, signout } from '../redux/actions/authActions';
import { RootState } from '../redux';
import Sidebar from '../components/sidebar/Sidebar';
import Hero from '../components/hero/Hero';

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { error, user, loading } = useSelector((state: RootState) => state.userRegister);


  return (
    <>
    <Hero/>
    </>
  );
}

export default HomePage;   