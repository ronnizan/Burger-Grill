import React from "react";
import { HeroSection, HeroContainer, HeroTitle, HeroDescription, HeroDescriptionText, ButtonAndArrowWrapper, SignUpLink, DownArrowScrollLink, DownArrow, RightArrow } from "./Hero-style"
import { User } from '../../redux/types/authTypes';

const Hero = ({ user }: { user: User }) => {

  return (
    <>
      <HeroSection>
        <HeroContainer>   
          <HeroTitle className="title">Burger Grill</HeroTitle>
          <HeroDescription>
            <HeroDescriptionText className="description-text"> Join us for your next Meal </HeroDescriptionText>
            <HeroDescriptionText className="description-text"> We got the juices going...</HeroDescriptionText>
            {!user &&<ButtonAndArrowWrapper className="button">
               <SignUpLink to='/auth' className="button">Join/Sign in to our Members Club &nbsp; <RightArrow></RightArrow></SignUpLink>
              <DownArrowScrollLink
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                <DownArrow></DownArrow>
              </DownArrowScrollLink>
            </ButtonAndArrowWrapper>}
            {user &&  <SignUpLink to='/order' className="button">Order Now &nbsp; <RightArrow></RightArrow></SignUpLink>}
          </HeroDescription>
        </HeroContainer>
      </HeroSection>
    </>)
}

export default Hero



