import React, { useState, useEffect } from 'react'
import { TopNavbar, TopNavbarContainer, HamburgerWrapper, HamburgerMenu, LinksWrapper, LogoWrapper, Logo, NavbarItem,  } from './Navbar-style';
import { SidebarData } from './NavbarData'
import { Link, useLocation } from 'react-router-dom';
import BusinessLogo from '../../../src/images/burgerlogo.png';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';
import NavbarCart from '../navbar-cart/NavbarCart';




const Navbar = ({ user, toggleSidebar }: { user: User, toggleSidebar: () => void }) => {
  const location = useLocation();
  const [scrollNav, setScrollNav] = useState(false);
  const [showCartItems, setShowCartItems] = useState(false);
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

    <TopNavbar>
      <TopNavbarContainer scrollNav={scrollNav || location.pathname !== '/'}>
        <HamburgerWrapper>
          <HamburgerMenu onClick={toggleSidebar} />
        </HamburgerWrapper>
        <LogoWrapper to="/"><Logo src={BusinessLogo} alt="" /></LogoWrapper>
        <LinksWrapper>
          {user &&
            <NavbarItem>
              <div>
                <span>Hello {user.name}</span>
              </div>
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
          <NavbarItem onMouseOver={() => setShowCartItems(true)} onMouseOut={() => setShowCartItems(false)} >
            <NavbarCart showCartItems={showCartItems} />
          </NavbarItem>
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

  )

}

export default Navbar
