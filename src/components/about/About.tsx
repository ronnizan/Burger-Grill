import React from "react";
import { AboutSection, AboutContainer, AboutTitle, ImageAndDescriptionContainer, AboutDescription, BurgerImage, ScrollButton, DownArrow } from "./About-style";
// import AboutBurgerImage from "../../images/about-burger.png";

const About = () => {

  return (
    <>
      <AboutSection id="about">
        <AboutContainer>
          <AboutTitle className="title">GREAT TASTE, GOOD TIMES</AboutTitle>
          <ImageAndDescriptionContainer>
            <BurgerImage className="about-image" src={'https://icecube-eu-291.icedrive.io/thumbnail?p=mdOXrilvg9t8IvqlFwsO%2FahKo50kAkgZbDO%2BYoALfKTowkeIgZdtC0GcK5bsWFxUhpYWZnkVp2yHnRkK7k4XLawHiTsv25ude%2BpwAGcP60s5zT7tRNl0T6sfzfnkAux5&w=1280&h=1280&m=cropped'} />
            <AboutDescription className="about-description">
              Everyone has their perfect match. Sometimes it’s just around the corner, other times you have to travel the world in search of it. Wherever your perfect Hamburger is, you found it.
            <br /><br />
              Here at BurgerGrill we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.
            <br />
            </AboutDescription>

          </ImageAndDescriptionContainer>
          <ScrollButton className="button" offset={-180}
            to="best-sellers">Check out our Best sellers <br /> <DownArrow /></ScrollButton>
        </AboutContainer>
      </AboutSection>
    </>)
}

export default About



