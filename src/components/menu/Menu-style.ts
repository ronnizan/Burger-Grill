import styled from 'styled-components';
import * as HiIcons from 'react-icons/hi';
import * as AiIcons from 'react-icons/ai';
import { Link as LinkRouter } from 'react-router-dom';
// import ReviewsBackground from '../../images/menu-hero.jpg';

export const MenuHero = styled.div`
  background-image: url('https://icecube-eu-288.icedrive.io/thumbnail?p=ORI5ex4iEw5VpTE1GXyKjTOJelM7MAXLCvUvbGbU%2Bit3%2B9WnUwAdSCn77zMm6cpouv24x1MtVA8K54ag6PfPwr1ljfvmEfI2ugPvUnf2niHpop7zFwqMEzTAR%2FP7Gthq&w=1280&h=1280&m=cropped');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 380px;
  }
`;
export const MenuTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 5rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
export const MenuSubTitle = styled.h3`
  font-family: 'Imbue', serif;
  font-size: 4rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const MenuSectionWrapper = styled.div`
  background: rgb(236, 236, 236);
`;
export const MenuSection = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(236, 236, 236);
`;
export const CategoriesContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const Category =
  styled.div <
  { currentCategory: boolean } >
  `
font-family: 'Imbue', serif;
font-size: 2rem;
border-bottom: ${({ currentCategory }) =>
    currentCategory ? '3px solid rgb(222, 141, 87, 0.7)' : 'none'};
margin: 0 10px;
color:black;
@media screen and (max-width: 768px) {
  font-size: 1.7rem;
}
@media screen and (max-width: 468px) {
  font-size: 1.2rem;
}
  cursor: pointer;
`;

export const MenuItemsContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const MenuItemCard = styled.div`
  display:flex;
  margin:20px;
  flex-direction: column;
  align-items: center;
  text-align:center;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
export const MenuItemImageBox = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 250px;
  height: 250px;
  :hover img {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
export const MenuItemImage = styled.img`
  transition: all 0.3s;
  display: block;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  transform: scale(1);
`;
export const DescriptionContainer = styled.div`
  width: 250px;
  height: 300px;
  background: white;
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
`;
export const MenuItemTitle = styled.h1`
  font-family: 'Imbue', serif;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const MenuItemDescription = styled.p`
  font-family: 'Indie Flower', cursive;
  font-size: 1.2rem;
`;

export const MenuItemPrice = styled.p`
  font-weight: bold;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const AddToCartButton = styled(HiIcons.HiPlusCircle)`
  color: #f9c56a;
  cursor: pointer;
  font-size: 45px;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;
export const RightArrow = styled(HiIcons.HiOutlineChevronRight)``;
export const VIcon = styled(AiIcons.AiFillCheckCircle)`
  width: 50px;
  height: 50px;
  color:green;
  cursor: pointer;
  
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export const SummaryLink = styled(LinkRouter)`
  color: white;
  background: #f9c56a;
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
  opacity: 0.8;
  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  transition: 0.5s all ease-in-out;
  animation: pulse 2s infinite 3s cubic-bezier(0.25, 0, 0, 1);
  box-shadow: 0 0 0 0 white;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    animation: none;
    opacity: 1;
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
