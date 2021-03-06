import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
// import Background from '../../images/hero2.jpg';
// import TitleBackground from '../../images/burger-title-background.jpg';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    background-image: url('https://icecube-eu-288.icedrive.io/thumbnail?p=I2JmNQKNK5AAOb5ZTyWVjy1RQiEd1JKGikBiJJmPbLy3kz2Cv%2FvLcRzREDKYyMsncGrtJO7b8Scv%2FgR%2Fhvl15I%2BzaEJVd98Bb2%2B3DakOeJ8LV%2B4F1Zn2ip5pxD98ol%2BX&w=1280&h=1280&m=cropped');
    background-blend-mode: luminosity;
    background-color: #666666;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const HeroContainer = styled.div`
  height: 100%;
  margin-top: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  font-size: 8rem;
  background-image: url('https://icecube-eu-291.icedrive.io/thumbnail?p=Mah961STSZY%2FbP5WC7eVEkiRoSIzdLU1Pevc%2FDIFGFl4oZpJSMYn3kR7SeCZMuAYGN6c5mxOZ1739fCUyu883lf9qbMnWfWr7FM3DfhP9AWg5Co9gGzuopya8mVefP8k&w=1280&h=1280&m=cropped');
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const HeroDescription = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
  }
`;
export const HeroDescriptionText = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: white;
  font-family: 'Imbue', serif;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ButtonAndArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignUpLink = styled(LinkRouter)`
  color: white;
  background: black;
  font-family: 'Imbue', serif;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 20px 20px;
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  transition: 0.5s all ease-in-out;
  animation: pulse 2s infinite 3s cubic-bezier(0.25, 0, 0, 1);
  box-shadow: 0 0 0 0 white;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    background: white;
    color: #1f4141;
    animation: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 18px rgba(255, 255, 255, 0);
    }
  }
`;
export const RightArrow = styled(AiIcons.AiOutlineArrowRight)`
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DownArrow = styled(FaIcons.FaArrowCircleDown)`
  font-size: 3rem;
  cursor: pointer;
  animation: float 1.5s linear alternate infinite;

  @keyframes float {
    50% {
      transform: translateY(-px);
    }
    100% {
      transform: translateY(-18px);
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const DownArrowScrollLink = styled(LinkScroll)``;
