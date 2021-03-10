import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartSummaryHero, CartSummarySectionWrapper, CartSummarySection, CartSummaryTableAndTotalSummary, TotalSummary, TotalSummaryRow, TotalSummaryCell, CartSummaryTitle, CartSummarySubTitle, CartIsEmptyTitle, CartSummaryTable, CartSummaryTableHeader, CartSummaryTableRow, CartSummaryTableHeaderCell, CartSummaryTableBody, CartSummaryTableBodyCell, CartSummaryItemImage, CartSummaryItemDescription, CloseIcon, LinksContainer, CheckoutLink, BackToOrderLink } from './CartSummary-style';
import { RootState } from '../../redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import { CartItem } from '../../redux/types/cartTypes';
import { getCartTotalForLoggedUser } from '../../helpers/getCartTotal';
import { getCartTotal } from './../../helpers/getCartTotal';

const CartSummary = () => {
  const dispatch = useDispatch();
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.userLogin);

  const showBurgerChanges = (cartItem: CartItem) => {
    return Object.entries(cartItem.changes).map(([key, value]) => {
      if (value) {
        if (key.startsWith('no')) {
          return <CartSummaryItemDescription key={key}>
            * {key.split('no').join('Without ')}
          </CartSummaryItemDescription>
        }
        if (key.startsWith('vegetablesOnTheSide')) {
          return <CartSummaryItemDescription key={key}>
            * Vegetables On The Side
          </CartSummaryItemDescription>
        }
        return key
      }
      return null
    })
  }



  return (
    <>
      <CartSummaryHero>
        <CartSummaryTitle>Cart Summary</CartSummaryTitle>
        <CartSummarySubTitle>Proceed to Checkout or Update your cart</CartSummarySubTitle>
      </CartSummaryHero>
      <CartSummarySectionWrapper>
        <CartSummarySection>
          {cartItems.length === 0 && <CartIsEmptyTitle>Your cart is empty</CartIsEmptyTitle>}
          {cartItems.length > 0 && <CartSummaryTableAndTotalSummary>
            <TotalSummary>
              <TotalSummaryRow>
                <TotalSummaryCell>Cart Subtotal</TotalSummaryCell>
                <TotalSummaryCell>{cartItems ? '$' : '0'}{getCartTotal(cartItems)}</TotalSummaryCell>
              </TotalSummaryRow>
              {user && <TotalSummaryRow> <TotalSummaryCell>Membership Discount </TotalSummaryCell>
                <TotalSummaryCell>5%</TotalSummaryCell> </TotalSummaryRow>}
              <TotalSummaryRow>
                <TotalSummaryCell>Order Total</TotalSummaryCell>
                <TotalSummaryCell>{cartItems ? '$' : '0'}{user ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems)}</TotalSummaryCell>
              </TotalSummaryRow>

            </TotalSummary>
            <CartSummaryTable cellSpacing="0" cellPadding="0">
              <CartSummaryTableHeader>
                <CartSummaryTableRow>
                  <CartSummaryTableHeaderCell></CartSummaryTableHeaderCell>
                  <CartSummaryTableHeaderCell></CartSummaryTableHeaderCell>
                  <CartSummaryTableHeaderCell>PRODUCT</CartSummaryTableHeaderCell>
                  <CartSummaryTableHeaderCell>PRICE</CartSummaryTableHeaderCell>
                </CartSummaryTableRow>
              </CartSummaryTableHeader>
              <CartSummaryTableBody>
                {cartItems && cartItems.map((cartItem, index) => (
                  <CartSummaryTableRow key={index}>
                    <CartSummaryTableBodyCell onClick={() => {
                      dispatch(removeItemFromCart(cartItem.id))
                    }}><CloseIcon></CloseIcon></CartSummaryTableBodyCell>
                    <CartSummaryTableBodyCell><CartSummaryItemImage src={cartItem.image} alt={cartItem.title} /></CartSummaryTableBodyCell>
                    <CartSummaryTableBodyCell>{cartItem.title}
                      {cartItem.burgerSize && <CartSummaryItemDescription>
                        {cartItem.burgerSize === 'Classic' && '* Classic burger (200 gr)'}
                        {cartItem.burgerSize === 'Large' && '* Large burger (300 gr) + $2'}
                        {cartItem.burgerSize === 'Gigantic' && '* Gigantic burger (400 gr) + $3'}
                      </CartSummaryItemDescription>}
                      {cartItem.drink && <CartSummaryItemDescription>
                        + {cartItem.drink}
                      </CartSummaryItemDescription>}
                      {cartItem.sideDish && <CartSummaryItemDescription>
                        + {cartItem.sideDish}
                      </CartSummaryItemDescription>}
                      {cartItem.changes &&
                        showBurgerChanges(cartItem)
                      }
                    </CartSummaryTableBodyCell>
                    <CartSummaryTableBodyCell>${cartItem.price}</CartSummaryTableBodyCell>
                  </CartSummaryTableRow>
                ))}

              </CartSummaryTableBody>
            </CartSummaryTable>
          </CartSummaryTableAndTotalSummary>}
          <LinksContainer isCartEmpty={cartItems.length === 0}>
            {cartItems.length > 0 && <CheckoutLink to="/checkout">TO CHECKOUT</CheckoutLink>}
            {cartItems.length > 0 && <BackToOrderLink to="/order">BACK TO MENU</BackToOrderLink>}
            {cartItems.length === 0 && <CheckoutLink to="/order">BACK TO MENU</CheckoutLink>}
          </LinksContainer>
        </CartSummarySection>
      </CartSummarySectionWrapper>
    </>
  );
};

export default CartSummary;
