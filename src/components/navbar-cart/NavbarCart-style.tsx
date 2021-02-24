import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';



export const CartWrapper = styled.div<{ showCartItems: boolean,showScrollBar:boolean }>`
    position: relative ;
    ul{
      display: ${({ showCartItems }) => (showCartItems ? 'block' : 'none')};
      position: absolute;
      background-color: #f1f1f1;
      min-width: 300px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top:115%;
      right:-20%;
      max-height:600px;
      overflow:hidden;
      overflow-y: ${({ showScrollBar }) => (showScrollBar ? 'auto' : 'hidden')};
      
    }
`;


export const CartLogo = styled(IoIcons.IoIosCart)`
 font-size:3rem;
 margin-right:5px;
`;
export const NumberOfCartItems = styled.div`
  width: 36px!important;
  height: 36px !important;
  padding: 8px;
  background: rgb(247,195,105);
  border-radius: 50% !important;
  // border: 2px solid #666;
  color:black !important;
  // text-align: center !important;
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
align-items: center;
`;
export const CartTitle = styled.h3`
color: black;
padding: 12px;
text-decoration: none;
display: flex;
align-items: center;

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
font-size:20px;
color:black;
width:100%;
font-family: 'Imbue', serif;
`;
export const CartItemAdditionalDiscount = styled.small`
font-size:17px;
color:black;
width:100%;
font-family: 'Imbue', serif;
position: absolute;
left:3px;
`;

export const CloseIcon = styled(AiIcons.AiOutlineClose)`
  color: black;
  cursor: pointer;  
`;


export const CartItemTotalPrice = styled.span`
font-size:24px;
color:black;
width:100%;
`;
export const ViewCartLink = styled(Link)`
// font-size:14px;
color:black !important;
padding:20px;
width:200px !important;
background:#F7C369;
opacity:0.8;
text-align: center !important;
:hover{
  background:#F7C369;
  opacity:1;
}
`;

