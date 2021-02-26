import React from 'react'
import { SidebarContainer, LinksContainer, ToggleSidebarWrapper, NumberOfCartItems, CloseIcon, NavbarItemMobile } from './Sidebar-style';
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/actions/authActions';
import { CartItem } from '../../redux/types/cartTypes';
import { RootState } from '../../redux';


const Sidebar = ({ user, showSidebar, toggleSidebar }: { user: User, showSidebar: boolean, toggleSidebar: () => void }) => {
  const dispatch = useDispatch();
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cart);

  return (
    <SidebarContainer showSidebar={showSidebar}>
      <LinksContainer onClick={toggleSidebar}>
        <ToggleSidebarWrapper>
          <CloseIcon style={{ cursor: 'pointer' }}></CloseIcon>
        </ToggleSidebarWrapper>
        {user && <NavbarItemMobile>
          <div>
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
        {user &&
          <NavbarItemMobile>
            <Link to='/profile'>
              <HiIcons.HiUser />
              <span>Profile</span>
            </Link>
          </NavbarItemMobile>
        }
        <NavbarItemMobile>
          <Link to={'/cart'}>
            <IoIcons.IoIosCart />
            <span>Cart </span>
            <NumberOfCartItems>{cartItems && cartItems.length}</NumberOfCartItems>
          </Link>
        </NavbarItemMobile>
        {!user &&
          <NavbarItemMobile>
            <Link to='/auth'>
              <FiIcons.FiLogIn />
              <span>Login</span>
            </Link>
          </NavbarItemMobile>}
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
