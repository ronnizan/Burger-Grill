import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const TopNavbar = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  @media screen and (max-width: 768px) {
    height: 120px;
  }
`;
export const TopNavbarContainer =
  styled.div <
  { scrollNav: boolean } >
  `
  background: ${({ scrollNav }) =>
    scrollNav ? 'rgb(41,41,41)' : 'transparent'};
  height: 80px;
  display: flex;
  transition: 1.3s all ease;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    height: 120px;
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
  margin-right: 10px;
`;

export const NavbarItem = styled.span`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 80px;
  color:white;
  a{
    text-decoration: none;
    color: white;
    font-size: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all .2s ease-in-out; 
  }
  a:hover{
    color:lightblue ;
  }

  div{
    text-decoration: none;
    color: white;
    font-size: 18px;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all .2s ease-in-out; 
  }

  div:hover{
    color:lightblue;
  }
  
  @media screen and (max-width: 768px) {
    display:none
  }
  span {
    margin-left: 10px;
  } 

  }
`;
