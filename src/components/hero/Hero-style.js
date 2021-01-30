import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import background from '../../images/hero2.jpg';
import { Link as LinkScroll } from 'react-scroll';

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    background-image: url(${background});
    background-blend-mode: luminosity;
    ${'' /* background-blend-mode: multiply	; */}
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
    ${'' /* opacity: 0.75; */}
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
  background-image: url(https://acdn.foodbox.co.il/wp-content/uploads/sites/15/2019/06/25133533/covers2.jpg);
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

export const ButtonSignUp = styled.button`
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
  display:flex;
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
    ${'' /* animation-play-state: paused; */}
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

export const DownArrowScrollLink = styled(LinkScroll)`
`;
