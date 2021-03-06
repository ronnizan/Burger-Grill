import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';

export const Popup = styled.div`
  border: 1px solid lightgrey;
  max-height: 700px;
  overflow-y: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(246, 244, 247);
  @media screen and (max-width: 558px) {
    max-height: 400px;
    overflow-y: auto;
  }
`;
export const CloseIcon = styled(AiIcons.AiOutlineClose)`
  color: black;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PopupTopRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const ItemTitle = styled.h1`
  font-family: 'Imbue', serif;
  font-size: 2rem;
  display: inline-block;
  border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: black;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const ItemDescription = styled.h3`
  font-family: 'Imbue', serif;
  font-size: 1.5rem;
  display: inline-block;
  // border-bottom: 3px solid rgb(222, 141, 87, 0.7);
  margin-bottom: 20px;
  color: black;
  margin-top: 20px;
text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const PopupRow = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  background: white;
  padding: 20px;
  margin: 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;
export const PopupLabel = styled.label`
  font-size: 1.4rem;
  margin-top: 20px;
  color: #cc1936;
  margin-bottom: 10px;
`;
export const PopupOptionsContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;
export const PopupOption =
  styled.span <
    { isSelected: boolean } >
    `
font-size:1rem;
margin:5px;
border:1px solid lightgrey;
padding:5px;
position:relative;
cursor: pointer;
background: ${({ isSelected }) =>
      isSelected ? 'rgb(204,25,54,0.8)' : 'white'};
color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;
export const VIcon = styled(AiIcons.AiFillCheckCircle)`
  width: 20px;
  height: 20px;
  color:rgb(204,25,54,0.8);
  cursor: pointer;
  position:absolute;
  top:-17px;
  right: -10px;
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

export const AddToCartButton = styled.button`
  color: black;
  background: rgb(249, 197, 106, 0.8);
  outline: none;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 15px;
  font-weight: bold;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;
