import React, { FC,useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from '../redux';
import activateScrollReveal from '../helpers/scrollReveal';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import BestSellers from '../components/best-sellers/BestSellers';
import Reviews from '../components/reviews/Reviews';
import Reservation from '../components/reservation/Reservation';
import Footer from '../components/footer/Footer';


const HomePage: FC = () => {

  useEffect(() => {
    activateScrollReveal()
  })
  const { user  } = useSelector((state: RootState) => state.userLogin);


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