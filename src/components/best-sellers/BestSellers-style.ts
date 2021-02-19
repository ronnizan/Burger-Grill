import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import BestSellersBackground from '../../images/bestsellers-background.jpg';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const BestSellersSection = styled.div`
  background-image: url(${BestSellersBackground});
  // background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // width:100vw;
  padding: 70px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BestSellersContainer = styled.div`
  // max-width:560px;
  // margin:0 auto;
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ArrowsContainer = styled.div`
width:250px;
margin-bottom: 30px;
display:flex;
justify-content:space-between;
@media screen and (max-width: 768px) {
  width: 150px;

  }
`;
export const RightArrow = styled(FaIcons.FaArrowAltCircleRight)`
  width: 50px;
  height: 50px;
  // border-radius: 10px;
  // position:absolute;
  // right:0px;
  // top:50%;
  color:white;
  cursor: pointer;

`;
export const LeftArrow = styled(FaIcons.FaArrowAltCircleLeft)`
  width: 50px;
  height: 50px;
  // border-radius: 10px;
  // position:absolute;
  // left:0px;
  // top:50%;
  color:white;
  cursor: pointer;
`;
export const BestSellersTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 4rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
    margin-bottom: 20px;
    color:white;
  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Slide =
  styled.div <
    { currentSlide: boolean } >
    `
  opacity: ${({ currentSlide }) => (currentSlide ? 1 : 0)};
  transition-duration: ${({ currentSlide }) =>
      currentSlide ? '3s' : '3s ease-in-out'};
  transform: ${({ currentSlide }) => (currentSlide ? 'scale(1.08)' : 'scale(1)')};

`;

export const SlideInner =
  styled.div
    `
  display:flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  // max-width:1360px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`;
export const BestSellersImageBox = styled.div`
  // width: 350px;
  // height: 350px;
  // transition-duration: 1s;
  // :hover{
  //   transform:scale(1.04);
  // }

  // position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: 350px;
  height: 350px;
  :hover img {
    transform: scale(1.1);

}
@media screen and (max-width: 768px) {
  width: 250px;
  height: 250px;
  }
`;
export const BestSellersImage = styled.img`
  // width: 350px;
  // height: 350px;
  // transition-duration: 1s;
  // :hover{
  //   transform:scale(1.04);
  // }


  // max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  margin:0 auto;
  height:100%;
  // height: auto;
  transform: scale(1);
`;
export const BurgerDescriptionContainer = styled.div`
  width: 350px;
  height: 350px;
  background:white;
  padding:20px;
  display:flex;
  position: relative;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 320px;
    }
  
`;
export const BurgerTitle = styled.h1`
      // margin-left:40px;
      // margin-top:40px;
      font-family: 'Imbue', serif;
      text-align:center;
      border-bottom:1px solid black;
`;
export const BurgerDescription = styled.p`
      // margin-left:40px;
      font-family: 'Indie Flower', cursive;
font-size:1.2rem;
      // margin-top:40px;
`;

export const BurgerPrice = styled.p`
      // margin-left:40px;
      // margin-top:40px;
      font-weight:bold;

`;
export const ButtonsContainer = styled.div`
display:flex;
position:absolute;
bottom:20px;

`;
export const OrderButton = styled.button`
color:black;
background:#F9C56A;
outline: none;
border:none;
cursor:pointer;
padding:15px;
font-weight:bold;
opacity:0.7;
margin-right:10px;
:hover{
  opacity:1;
}
@media screen and (max-width: 768px) {
  padding:5px;

  }
`;
export const AddToCartButton = styled.button`
color:black;
background:lightgrey;
outline: none;
border:none;
cursor:pointer;
padding:15px;
font-weight:bold;
opacity:0.7;

:hover{
  opacity:1;
}
@media screen and (max-width: 768px) {
  padding:5px;

}
`;
export const VIcon = styled(AiIcons.AiFillCheckCircle)`
  width: 50px;
  height: 50px;
  color:green;
  cursor: pointer;
  
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes zoomInRight {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
  transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
  -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
  transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
  }
  @keyframes zoomInRight {
  0% {
  opacity: 0;
  -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
  transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
  -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }
  60% {
  opacity: 1;
  -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
  transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
  -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
`;
export const MenuLink = styled(LinkRouter)`
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


