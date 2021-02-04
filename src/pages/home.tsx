import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, setError, signout } from '../redux/actions/authActions';
import { RootState } from '../redux';
import activateScrollReveal from '../helpers/scrollReveal';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import BestSellers from '../components/best-sellers/BestSellers';
import Reviews from '../components/reviews/Reviews';
import Reservation from '../components/reservation/Reservation';
import Footer from '../components/footer/Footer';


const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { error, user, loading } = useSelector((state: RootState) => state.userRegister);
  useEffect(() => {
    activateScrollReveal()
  })

  return (
    <>
      <Hero />
      <About />
      <BestSellers />
      <Reviews/>
      <Reservation/>
      <Footer/>
    </>
  );
}

export default HomePage;   