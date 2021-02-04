import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';



export const TopNavbar = styled.div`
  // background:#292929;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 100;
  @media screen and (max-width: 768px) {
    height: 120px;
    // padding-top:20px;
  }
  `;
export const TopNavbarContainer = styled.div<
  { scrollNav: boolean } >`
  background: ${({ scrollNav }) => (scrollNav ? 'rgb(41,41,41)' : 'transparent')};
  height: 80px;
  display: flex;
  transition: 1.3s all ease;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 120px;
    // padding-top:20px;
  }
`;

export const HamburgerWrapper = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  justify-self: start;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerMenu = styled(FaIcons.FaBars)`
  color: white;
  cursor: pointer;
`;
export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 16px;
  width: 50px;
  // padding-top: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 75px;
  }
  
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const LinksWrapper = styled.div`
  display: flex;
`;

export const SidebarContainer =
  styled.nav <
    { showSidebar: boolean } >
    `
background-color: #292929;
width: 220px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
z-index: 1000;
top: 20px;
transition: ${({ showSidebar }) => (showSidebar ? '350ms' : '1350ms')};
left: ${({ showSidebar }) => (showSidebar ? '0' : '-100%')};
`;

export const LinksContainer = styled.ul`
  width: 100%;
`;
export const ToggleSidebarWrapper = styled.li`
  background-color: #292929;
  width: 100%;
  height: 80px;
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

export const NavbarItem = styled.span`
  display: flex;
  justify-content: start;
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
display:none
  }
  span {
  margin-left: 16px;
  } 

  }
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


  span {
  margin-left: 16px;
  } 

  }
`;
