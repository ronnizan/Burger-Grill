import React, { useState, useEffect } from 'react'
import { CloseIcon, CartWrapper, CartLogo, NumberOfCartItems, CartUl, TopArrowTriangle, CartItemRow, CartTitle, CartItemImage, CartItemDescriptionAndPriceWrapper, CartItemDescription, CartItemPrice, CartItemAdditionalDiscount, CartItemTotalPrice, ViewCartLink } from './NavbarCart-style';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/index';
import { CartItem } from '../../redux/types/cartTypes';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import firebase from '../../firebase/firebaseConfig';
import { getCartTotalForLoggedUser } from '../../helpers/getCartTotal';
import { getCartTotal } from './../../helpers/getCartTotal';

const NavbarCart = ({ showCartItems }: { showCartItems: boolean }) => {
  const dispatch = useDispatch();
  const [pro, setPro] = useState([])
  const { error, user, loading } = useSelector((state: RootState) => state.userLogin);
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cart);



  return (
    <CartWrapper showCartItems={showCartItems} showScrollBar={cartItems && cartItems.length >= 7}>
      <TopArrowTriangle showCartItems={showCartItems}></TopArrowTriangle>
      <CartLogo />
      <NumberOfCartItems> {cartItems.length}</NumberOfCartItems>
      <CartUl>
        <CartItemRow onClick={() => {
        }}><CartTitle>Shopping Cart</CartTitle>
        </CartItemRow>
        <hr />
        {cartItems && cartItems.map((cartItem, index) => (
          <CartItemRow key={index}><CartItemImage src={cartItem.image} />
            <CartItemDescriptionAndPriceWrapper>
              <CartItemDescription>{cartItem.title}</CartItemDescription>
              <CartItemPrice>${cartItem.price}</CartItemPrice>
              
            </CartItemDescriptionAndPriceWrapper>
            <CloseIcon onClick={() => {
              dispatch(removeItemFromCart(cartItem.id))
            }} />
          </CartItemRow>
        ))}
        <hr />
        <CartItemRow>
          {/* calculate 5% discount if logged user or calculate cart sum */}
          <CartItemTotalPrice>{cartItems ? '$' : '0'}{user ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems)}
            <br />
            {user && <CartItemAdditionalDiscount>(5% discount for Registered User)</CartItemAdditionalDiscount>}
          </CartItemTotalPrice>
          <ViewCartLink to="cart">View Cart</ViewCartLink>
        </CartItemRow>
      </CartUl>

    </CartWrapper>
  )

}

export default NavbarCart
