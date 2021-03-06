import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/types/productsType';
import { Overlay } from './MenuItemPopup-style';

import BurgerPopup from '../burger-popup/BurgerPopup';
import MealPopup from '../meal-popup/MealPopup';


const MenuItemPopup = () => {
  const { menuItem,fromChatbot }: { menuItem: MenuItem,fromChatbot:boolean } = useSelector((state: RootState) => state.productPopup);
  
  // console.log(fromChatbot,'asd')
  return (<>
    {menuItem.id &&
      <Overlay>
        {menuItem.type === 'burgers' && <BurgerPopup menuItem={menuItem}>
        </BurgerPopup>}
        {menuItem.type === 'meals' && <MealPopup menuItem={menuItem} fromChatbot={fromChatbot} children={''} />}
      </Overlay>}
  </>)
}

export default MenuItemPopup
