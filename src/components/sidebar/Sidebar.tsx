import React, { useState, useEffect } from 'react'
import { TopNavbar, TopNavbarContainer, HamburgerWrapper, HamburgerMenu, LinksWrapper, LogoWrapper, Logo, SidebarContainer, LinksContainer, ToggleSidebarWrapper, CloseIcon, NavbarItem, NavbarItemMobile } from './Sidebar-style';
import { SidebarData } from './SidebarData'
import { Link,useLocation } from 'react-router-dom';
import BusinessLogo from '../../../src/images/burgerlogo.png';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';




const Sidebar = ({ user }: { user: User }) => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const [scrollNav, setScrollNav] = useState(false);
  const dispatch = useDispatch();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    }
  }, []);
  return (
    <>
      <TopNavbar>
        <TopNavbarContainer scrollNav={scrollNav || location.pathname !=='/'}>
          <HamburgerWrapper>
            <HamburgerMenu onClick={toggleSidebar} />
          </HamburgerWrapper>
          <LogoWrapper to="/"><Logo src={BusinessLogo} alt="" /></LogoWrapper>
          <LinksWrapper>
            {user &&
              <NavbarItem>
                <Link to={'/book-table'}>
                  <span>Hello {user.name}</span>
                </Link>
              </NavbarItem>}
            {SidebarData.map((item, index) => {
              return (
                <NavbarItem key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </NavbarItem>
              )
            })}
            {user &&
              <NavbarItem>
                <Link onClick={() => {
                  dispatch(logOut())
                }} to={'/'}>
                  <FiIcons.FiLogOut />
                  <span>Logout</span>
                </Link>
              </NavbarItem>}
          </LinksWrapper>
        </TopNavbarContainer>
      </TopNavbar>
      <SidebarContainer showSidebar={showSidebar}>
        <LinksContainer onClick={toggleSidebar}>
          <ToggleSidebarWrapper>
            <CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
          </ToggleSidebarWrapper>
          {user && <NavbarItemMobile>
            <Link to={'/book-table'}>
            <HiIcons.HiUser/> 
              <span>Hello {user.name}</span>
            </Link>
          </NavbarItemMobile>}
          {SidebarData.map((item, index) => {
            return (
              <NavbarItemMobile key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </NavbarItemMobile>
            )
          })}
          {user && <NavbarItemMobile>
            <Link onClick={() => {
              dispatch(logOut())
            }} to={'/'}>
              <FiIcons.FiLogOut />
              <span>Logout</span>
            </Link>
          </NavbarItemMobile>}

        </LinksContainer>
      </SidebarContainer>
    </>
  )

}

export default Sidebar
