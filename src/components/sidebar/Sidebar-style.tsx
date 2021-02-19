import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarContainer =
  styled.nav <
    { showSidebar: boolean } >
    `
background-color: #292929;
width: 200px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
z-index: 10000;
// top: 20px;
transition: ${({ showSidebar }) => (showSidebar ? '350ms' : '1350ms')};
left: ${({ showSidebar }) => (showSidebar ? '0' : '-100%')};
`;

export const LinksContainer = styled.ul`
  width: 100%;
`;
export const ToggleSidebarWrapper = styled.li`
  background-color: #292929;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CloseIcon = styled(AiIcons.AiOutlineClose)`
  color: white;
  font-size: 2rem;
  margin-left:1.3rem;
  // padding-bottom: 2rem;
  background: none;
`;

export const NumberOfCartItems = styled.div`
  width: 35px!important;
  height: 35px !important;
  padding: 10px;
  margin-left:10px;
  background: rgb(247,195,105);
  border-radius: 50% !important;
  color:black !important;
`;

export const NavbarItemMobile = styled.span`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  color:white;
  a{
  text-decoration: none;
  // color: #f5f5f5;
  color: white;
  font-size: 18px;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  // padding: 0 16px;
  border-radius: 4px;
  transition: all .2s ease-in-out; 
  }
  a:hover{
    color:lightblue ;
  }
  @media screen and (max-width: 768px) {
    a:hover{
      transform: scale(1.1) ;
    }
  }

  div{
    text-decoration: none;
    // color: #f5f5f5;
    color: white;
    font-size: 18px;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    // padding: 0 16px;
    border-radius: 4px;
    transition: all .2s ease-in-out; 
  }

  div:hover{
    color:lightblue;
  }


  span {
  margin-left: 10px;
  } 

  }
`;


