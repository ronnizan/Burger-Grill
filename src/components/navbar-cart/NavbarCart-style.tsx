import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';


export const CloseIcon = styled(AiIcons.AiOutlineClose)`
  color: black;
  // font-size: 2rem;
  // margin-left:1.3rem;
  // padding-bottom: 2rem;
  // background: none;
`;

export const CartWrapper = styled.div<{ showCartItems: boolean }>`
    position: relative ;
    ul{
      display: ${({ showCartItems }) => (showCartItems ? 'block' : 'none')};
      position: absolute;
      background-color: #f1f1f1;
      min-width: 460px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top:115%;
      right:-20%;
    }
`;


export const CartLogo = styled(IoIcons.IoIosCart)`
 font-size:3rem;
 margin-right:5px;
`;
export const NumberOfCartItems = styled.div`
  width: 36px!important;
  height: 36px !important;
  padding: 5px;
  background: rgb(247,195,105);
  border-radius: 50% !important;
  border: 2px solid #666;
  color:black !important;
  // text-align: center;
  // font: 32px Arial, sans-serif;
`;
export const CartUl= styled.ul`
    position: relative;
`;

export const TopArrowTriangle = styled.div<{ showCartItems: boolean }>`
-webkit-clip-path: polygon(50% 69%, 11% 100%, 88% 100%);
clip-path: polygon(50% 69%, 11% 100%, 88% 100%);
height:125px;
width:125px;
background:#f1f1f1;
position: absolute;
top:10px;
display: ${({ showCartItems }) => (showCartItems ? 'block' : 'none !important')}; 
`;

export const CartItemRow = styled.span`
color: black;
padding: 12px;
text-decoration: none;
display: flex;
`;
export const CartItemImage = styled.img`
width:50px;
height:50px;
// object-fit:contain;
margin-right:10px;
`;
export const CartItemDescriptionAndPriceWrapper = styled.div`
display:flex;
// align-items: center;
flex-direction: column;
justify-content: center;
`;
export const CartItemDescription = styled.span`
font-size:14px;
color:black;
width:100%;
line-height:1.5;
`;
export const CartItemPrice = styled.span`
font-size:14px;
color:black;
width:100%;
`;

