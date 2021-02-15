import React, { useState, useEffect } from 'react'
import { CloseIcon, CartWrapper, CartLogo, NumberOfCartItems,CartUl, TopArrowTriangle, CartItemRow, CartItemImage, CartItemDescriptionAndPriceWrapper, CartItemDescription, CartItemPrice } from './NavbarCart-style';
import { User } from '../../redux/types/authTypes';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import { useDispatch } from 'react-redux';


const NavbarCart = ({ showCartItems }: { showCartItems: boolean }) => {

  const dispatch = useDispatch();


  return (
    <CartWrapper showCartItems={showCartItems}>
        <TopArrowTriangle showCartItems={showCartItems}></TopArrowTriangle>
      <CartLogo />
      <NumberOfCartItems>5</NumberOfCartItems>
      <CartUl>
        <CartItemRow><h4>Shopping Cart</h4></CartItemRow>    
        <hr />
        <CartItemRow><CartItemImage src="https://demo.web3canvas.com/themeforest/tomato/img/shop/single/1.jpg" />
          <CartItemDescriptionAndPriceWrapper>
            <CartItemDescription>The Impossible Burger</CartItemDescription>
            <CartItemPrice>$25.99</CartItemPrice>
          </CartItemDescriptionAndPriceWrapper>
          <CloseIcon/>

        </CartItemRow>        <hr />

        <CartItemRow><CartItemImage src="https://demo.web3canvas.com/themeforest/tomato/img/shop/single/1.jpg" />
          <CartItemDescriptionAndPriceWrapper>
            <CartItemDescription>The Impossible Burger</CartItemDescription>
            <CartItemPrice>$25.99</CartItemPrice>
          </CartItemDescriptionAndPriceWrapper>
          <CloseIcon/>

        </CartItemRow>        <hr />

        <CartItemRow><CartItemImage src="https://demo.web3canvas.com/themeforest/tomato/img/shop/single/1.jpg" />
          <CartItemDescriptionAndPriceWrapper>
            <CartItemDescription>The Impossible Burger</CartItemDescription>
            <CartItemPrice>$25.99</CartItemPrice>
          </CartItemDescriptionAndPriceWrapper>
          <CloseIcon/>

        </CartItemRow>        <hr />

        <CartItemRow><CartItemImage src="https://demo.web3canvas.com/themeforest/tomato/img/shop/single/1.jpg" />
          <CartItemDescriptionAndPriceWrapper>
            <CartItemDescription>The Impossible Burger</CartItemDescription>
            <CartItemPrice>$25.99</CartItemPrice>
          </CartItemDescriptionAndPriceWrapper>
          <CloseIcon/>

        </CartItemRow>        <hr />

        <CartItemRow><CartItemImage src="https://demo.web3canvas.com/themeforest/tomato/img/shop/single/1.jpg" />
          <CartItemDescriptionAndPriceWrapper>
            <CartItemDescription>The Impossible Burger</CartItemDescription>
            <CartItemPrice>$25.99</CartItemPrice>
          </CartItemDescriptionAndPriceWrapper>
          <CloseIcon/>

        </CartItemRow>
      </CartUl>

    </CartWrapper>
  )

}

export default NavbarCart
