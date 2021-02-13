import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { signUpUser, setError, signOut } from '../redux/actions/authActions';
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
  useEffect(() => {
    activateScrollReveal()
  })
  const { error, user, loading } = useSelector((state: RootState) => state.userLogin);


  return (
    <>
      <Hero user={user}/>
      <About />
      <BestSellers />       
      <Reviews/>
      <Reservation fromBookTablePage={false}/>
      <Footer/>
    </>
  );
}   

export default HomePage;     