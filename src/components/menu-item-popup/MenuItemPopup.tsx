import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/types/productsType';
import { Overlay } from './MenuItemPopup-style';

import BurgerPopup from '../burger-popup/BurgerPopup';
import MealPopup from '../meal-popup/MealPopup';


const MenuItemPopup = () => {
  const { menuItem }: { menuItem: MenuItem } = useSelector((state: RootState) => state.productPopup);
  return (<>
    {menuItem.id &&
      <Overlay>
        {menuItem.type === 'burgers' && <BurgerPopup menuItem={menuItem}>
        </BurgerPopup>}
        {menuItem.type === 'meals' && <MealPopup menuItem={menuItem} children={''} />}
      </Overlay>}
  </>)
}

export default MenuItemPopup
