import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { MenuItem } from '../../redux/types/productsType';
import { Popup, PopupTopRow, ItemTitle, VIcon, CloseIcon, PopupRow, PopupLabel, PopupOptionsContainer, PopupOption, AddToCartButton } from './MealPopup-style';
import { removeItemFromPopup, } from '../../redux/actions/productsActions';
import { addItemToCart } from '../../redux/actions/cartActions';


const MealPopup = ({ menuItem, children }: { menuItem: MenuItem; children: any }) => {
  const dispatch = useDispatch();
  const { menuItems, loading, error }: { menuItems: MenuItem[], loading: boolean, error: string } = useSelector((state: RootState) => state.allProducts);

  const [burgerSize, setBurgerSize] = useState('Classic');
  const [cookingLevel, setCookingLevel] = useState('MW');
  const [sideDish, setSideDish] = useState('French Fries');
  const [drink, setDrink] = useState('Coca Cola');
  const [changes, setChanges] = useState({
    noOnion: false,
    noLettuce: false,
    noTomato: false,
    noPickle: false,
    noVegetables: false,
    vegetablesOnTheSide: false
  });
  return (
    <Popup>
      <PopupTopRow>
        <ItemTitle>{menuItem.title}</ItemTitle>
        <CloseIcon onClick={() => {
          dispatch(removeItemFromPopup())
        }} />
      </PopupTopRow>
      <PopupRow>
        <PopupLabel>Burger Size:</PopupLabel>
        <PopupOptionsContainer>
          <PopupOption isSelected={burgerSize === 'Classic'} onClick={() => {
            setBurgerSize('Classic')
          }}>Classic (200 gr) {burgerSize === 'Classic' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={burgerSize === 'Large'} onClick={() => {
            setBurgerSize('Large')
          }}>Large (300 gr) $2 {burgerSize === 'Large' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={burgerSize === 'Gigantic'} onClick={() => {
            setBurgerSize('Gigantic')
          }}>Gigantic (400 gr) $3 {burgerSize === 'Gigantic' && <VIcon></VIcon>}
          </PopupOption>
        </PopupOptionsContainer>
      </PopupRow>
      <PopupRow>
        <PopupLabel>Cooking Level:</PopupLabel>
        <PopupOptionsContainer>
          <PopupOption isSelected={cookingLevel === 'M'} onClick={() => {
            setCookingLevel('M')
          }}>M {cookingLevel === 'M' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={cookingLevel === 'MW'} onClick={() => {
            setCookingLevel('MW')
          }}>MW {cookingLevel === 'MW' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={cookingLevel === 'WD'} onClick={() => {
            setCookingLevel('WD')
          }}>WD {cookingLevel === 'WD' && <VIcon></VIcon>}
          </PopupOption>
        </PopupOptionsContainer>
      </PopupRow>
      <PopupRow>
        <PopupLabel>Changes:</PopupLabel>
        <PopupOptionsContainer>
          <PopupOption isSelected={changes.noOnion} onClick={() => {
            setChanges({ ...changes, noOnion: !changes.noOnion })
          }}>Without Onion {changes.noOnion && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={changes.noLettuce} onClick={() => {
            setChanges({ ...changes, noLettuce: !changes.noLettuce })
          }}>Without Lettuce {changes.noLettuce && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={changes.noPickle} onClick={() => {
            setChanges({ ...changes, noPickle: !changes.noPickle })
          }}>Without Pickle{changes.noPickle && <VIcon></VIcon>}
          </PopupOption>
          <PopupOption isSelected={changes.noTomato} onClick={() => {
            setChanges({ ...changes, noTomato: !changes.noTomato })
          }}>Without Tomato {changes.noTomato && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={changes.noVegetables} onClick={() => {
            setChanges({ ...changes, noVegetables: !changes.noVegetables })
          }}>Without Vegetables {changes.noVegetables && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={changes.vegetablesOnTheSide} onClick={() => {
            setChanges({ ...changes, vegetablesOnTheSide: !changes.vegetablesOnTheSide })
          }}>Vegetables On The Side {changes.vegetablesOnTheSide && <VIcon></VIcon>}
          </PopupOption>
        </PopupOptionsContainer>
      </PopupRow>



      <PopupRow>
        <PopupLabel>On The Side:</PopupLabel>
        <PopupOptionsContainer>
          <PopupOption isSelected={sideDish === 'French Fries'} onClick={() => {
            setSideDish('French Fries')
          }}>French Fries {sideDish === 'French Fries' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={sideDish === 'Holy Guacamole'} onClick={() => {
            setSideDish('Holy Guacamole')
          }}>Holy Guacamole {sideDish === 'Holy Guacamole' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={sideDish === 'Potatos'} onClick={() => {
            setSideDish('Potatos')
          }}>Potatos {sideDish === 'Potatos' && <VIcon></VIcon>}
          </PopupOption>

          <PopupOption isSelected={sideDish === 'Onion Rings'} onClick={() => {
            setSideDish('Onion Rings')
          }}>Onion Rings {sideDish === 'Onion Rings' && <VIcon></VIcon>}
          </PopupOption>
        </PopupOptionsContainer>
      </PopupRow>

      <PopupRow>
        <PopupLabel>Drink:</PopupLabel>
        <PopupOptionsContainer>
          {menuItems.map(menuItem =>( menuItem.type === 'drinks' && <PopupOption isSelected={drink === menuItem.title} onClick={() => {
            setDrink(menuItem.title)
          }}>{menuItem.title} {drink === menuItem.title && <VIcon></VIcon>}
          </PopupOption>))}
        </PopupOptionsContainer>
      </PopupRow>
      <AddToCartButton onClick={() => {
        dispatch(addItemToCart({ ...menuItem, burgerSize, cookingLevel, changes, drink,sideDish, price: burgerSize === 'Large' ? menuItem.price + 2 : burgerSize === 'Gigantic' ? menuItem.price + 3 : menuItem.price }))
        dispatch(removeItemFromPopup())
      }}>ADD TO CART</AddToCartButton>
    </Popup>)
}

export default MealPopup
