import React, { useState,useEffect } from 'react'
import { TopNavbar, TopNavbarContainer, HamburgerWrapper, HamburgerMenu,LinksWrapper,LogoWrapper,Logo, SidebarContainer, LinksContainer, ToggleSidebarWrapper, CloseIcon, NavbarItem,NavbarItemMobile } from './Sidebar-style';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import BusinessLogo from '../../../src/images/burgerlogo.png';
    

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return ()=>{
      window.removeEventListener('scroll', changeNav);
    }
  }, []);
  return (
    <>  
      <TopNavbar>
        <TopNavbarContainer scrollNav={scrollNav}>  
          <HamburgerWrapper>   
            <HamburgerMenu onClick={toggleSidebar} />
          </HamburgerWrapper>
          <LogoWrapper to="/"><Logo src={BusinessLogo} alt="" /></LogoWrapper> 
          <LinksWrapper>  
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
          </LinksWrapper>
        </TopNavbarContainer>
      </TopNavbar>
      <SidebarContainer showSidebar={showSidebar}>
        <LinksContainer onClick={toggleSidebar}>
          <ToggleSidebarWrapper>
            {/* <Link to='#'> */}
            <CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
            {/* </Link> */}
          </ToggleSidebarWrapper>
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
        </LinksContainer>
      </SidebarContainer>
    </>
  )

}

export default Sidebar
