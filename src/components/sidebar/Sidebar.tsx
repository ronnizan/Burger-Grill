import React from 'react'
import { SidebarContainer, LinksContainer, ToggleSidebarWrapper, CloseIcon, NavbarItemMobile } from './Sidebar-style';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';


const Sidebar = ({ user, showSidebar, toggleSidebar }: { user: User, showSidebar: boolean, toggleSidebar: () => void }) => {
  const dispatch = useDispatch();
  
  return (
      <SidebarContainer showSidebar={showSidebar}>
        <LinksContainer onClick={toggleSidebar}>
          <ToggleSidebarWrapper>
            <CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
          </ToggleSidebarWrapper>
          {user && <NavbarItemMobile>
            <div>
              <HiIcons.HiUser />
              <span>Hello {user.name}</span>
            </div>
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
   
  )

}

export default Sidebar
