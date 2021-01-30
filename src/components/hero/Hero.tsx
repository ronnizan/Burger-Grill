import * as React from "react";
import { useState, useEffect } from "react";
import { HeroSection, HeroContainer, HeroTitle, HeroDescription, HeroDescriptionText,ButtonAndArrowWrapper, ButtonSignUp, DownArrowScrollLink, DownArrow,RightArrow } from "./Hero-style.js"
import ScrollReveal from 'scrollreveal'

const Hero = () => {

  let reval = {
    // distance: '50%',
    origin: 'right',
    delay: 100,
    duration: 5000,
    easing: 'ease',
  };
  let reval2 = {
    // distance: '50%',
    origin: 'right',
    delay: 1200,
    duration: 5000,
    easing: 'ease',
  };
  let reval3 = {
    // distance: '50%',
    origin: 'right',
    delay: 2200,
    duration: 5000,
    easing: 'ease',
  };


  useEffect(() => {
    ScrollReveal().reveal('.headline', reval)
    ScrollReveal().reveal('.description', reval2)
    ScrollReveal().reveal('.button', reval3)

  }, [])

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroTitle className="headline">Burger Grill</HeroTitle>
          <HeroDescription>
            <HeroDescriptionText className="description"> Join us for your next Meal </HeroDescriptionText>
            <HeroDescriptionText className="description"> We get the juices going...</HeroDescriptionText>
            <ButtonAndArrowWrapper className="button">
            <ButtonSignUp className="button">Join our Members Club &nbsp; <RightArrow></RightArrow></ButtonSignUp>
            <DownArrowScrollLink 
              to='about'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              // offset={-280}
              // activeClass='active'
              >
              <DownArrow></DownArrow>
            </DownArrowScrollLink>
            </ButtonAndArrowWrapper>
          </HeroDescription>
        </HeroContainer>
      </HeroSection>
    </>)
}

export default Hero



