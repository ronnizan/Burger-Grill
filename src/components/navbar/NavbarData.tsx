import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Order',
    path: '/order',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Book Table',
    path: '/book-table',
    icon: <GiIcons.GiTabletopPlayers />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Cart',
  //   path: '/order',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text'
  // }
];
