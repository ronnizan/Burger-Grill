import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';

export const AboutSection = styled.section`
  padding: 40px;
  text-align: center;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  @media screen and (max-width: 468px) {
    right: 20px;
  }
`;

export const AboutTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 3rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0px;
  }
`;
export const ImageAndDescriptionContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  max-width: 1360px;
  margin: 0 auto;
`;

export const AboutDescription = styled.div`
  flex: 10%;
  padding: 20px;
  text-align: left;
  margin-left: 10px;
  font-family: 'Indie Flower', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 500px;
  min-width: 500px;
  @media screen and (max-width: 768px) {
    flex: 100%;
    min-width: 100px;
  }
`;

export const BurgerImage = styled.img`
  flex: 10%;
  max-height: 430px;
  max-width: 430px;
  @media screen and (max-width: 768px) {
    ${'' /* flex: 100%; */}
    max-height: 300px;
    max-width: 300px;
    order: 1;
  }
`;

export const ScrollButton = styled(LinkScroll)`
  display: flex;
  flex-direction: column;
  color: white;
  background: black;
  font-family: 'Imbue', serif;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  padding: 10px 10px;
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
    background: lightgrey;
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

export const DownArrow = styled(AiIcons.AiFillCaretDown)`
// font-size: 3rem;
cursor: pointer;
animation: float 1.5s linear alternate infinite;

@keyframes float {
  50% {
    transform: translateY(-px);
  }
  100% {
    transform: translateY(-5px);
  }
}
@media screen and (max-width: 768px) {
  // font-size: 3rem;
}`;
