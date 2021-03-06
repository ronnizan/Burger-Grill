import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { CheckoutHero, CheckoutSectionWrapper, CheckoutSection, HeroTitle, CheckoutTitle, CheckoutSubTitle, CartIsEmptyTitle, OrderForm, FullNameWrapper, NameWrapper, OrderFormLabel, OrderFormSelect, OrderFormInput, NameInput, SmallDescription, TotalSummary, TotalSummaryTitle, TotalSummaryRow, TotalSummaryCell, PaypalWrapper, LinksContainer, CheckoutLink, SaveOrderDetailsButton } from './Checkout-style';
import { RootState } from '../../redux';
import Loader from '../loader/Loader';
import { CartItem } from '../../redux/types/cartTypes';
import { ServerBaseUrlProd } from '../../redux/constants/endPoints';
import { getCartTotal, getCartTotalForLoggedUser } from '../../helpers/getCartTotal';
import { Order } from '../../redux/types/orderTypes';
import { User } from '../../redux/types/authTypes';
import { createOrder } from '../../redux/actions/orderActions';
import { CREATE_ORDER_FAIL, CLEAR_ORDER } from '../../redux/constants/orderConstants';
import { OrderState } from '../../redux/reducers/orderReducer';


declare global {
  interface Window {
    paypal: any,
  }
}

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems }: { cartItems: CartItem[] } = useSelector((state: RootState) => state.cart);
  const { order, loading, error }: OrderState = useSelector((state: RootState) => state.creatOrder);
  const { user }: { user: User } = useSelector((state: RootState) => state.userLogin);
  const [orderMethod, setOrderMethod] = useState('Delivery');
  const [sdkReady, setSdkReady] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [floor, setFloor] = useState(0);
  const [apartmentNumber, setApartmentNumber] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(ServerBaseUrlProd + '/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }
    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
    return () => {
      dispatch({ type: CLEAR_ORDER });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const validateForm = (e) => {
    e.preventDefault();
    setIsFormValid(true)
  }

  const successPaymentHandler = (paymentResult) => {
    if (paymentResult.status === "COMPLETED") {
      const order: Order = {
        id: paymentResult.id,
        create_time: paymentResult.create_time,
        orderItems: cartItems,
        userId: user?.id ? user?.id : 'Anonymous',
        amount: user ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems),
        orderMethod,
        firstName,
        lastName,
        city,
        address,
        floor: floor,
        apartmentNumber: apartmentNumber,
        email,
        phoneNumber,
        orderNotes: orderNotes
      }
      dispatch(createOrder(order))
    }

  }


  const errorPaymentHandler = (paymentResult) => {
    dispatch({ type: CREATE_ORDER_FAIL, payload: 'payment failed' })

  }



  return (
    <>
      <CheckoutHero>
        <HeroTitle>Checkout</HeroTitle>
        {/* <CheckoutSubTitle>Proceed to Checkout or Update your cart</CheckoutSubTitle> */}
      </CheckoutHero>
      <CheckoutSectionWrapper>
        {!order?.id && <CheckoutSection>
          {cartItems.length === 0 && <CartIsEmptyTitle>Your cart is empty</CartIsEmptyTitle>}
          {cartItems.length > 0 && <>
            <CheckoutTitle>Order Deatils</CheckoutTitle>
            <SmallDescription>* All fields are required.</SmallDescription>
            {!isFormValid && <OrderForm onSubmit={validateForm}>
              <OrderFormLabel>Delivery/Pickup:</OrderFormLabel>
              <OrderFormSelect onChange={(e) => {
                setOrderMethod(e.target.value)
              }} value={orderMethod} required>
                <option value="Delivery">Delivery</option>
                <option value="Pickup">Pickup</option>
              </OrderFormSelect>
              {orderMethod === "Pickup" && <SmallDescription>* The order is ready within 30 minutes of completing the payment process.</SmallDescription>}
              {orderMethod === "Delivery" && <SmallDescription>* The delivery will reach your door within 30 minutes of completing the payment process.</SmallDescription>}
              <FullNameWrapper>
                <NameWrapper>
                  <OrderFormLabel>First Name:</OrderFormLabel>
                  <NameInput onChange={(e) => setFirstName(e.target.value)} type="text" required></NameInput>
                </NameWrapper>
                <NameWrapper>
                  <OrderFormLabel>Last Name:</OrderFormLabel>
                  <NameInput type="text" onChange={(e) => setLastName(e.target.value)} required></NameInput>
                </NameWrapper>
              </FullNameWrapper>
              {orderMethod === "Delivery" && <> <OrderFormLabel>City:</OrderFormLabel>
                <OrderFormInput type="text" onChange={(e) => setCity(e.target.value)} required></OrderFormInput></>}
              {orderMethod === "Delivery" && <><OrderFormLabel>Address:</OrderFormLabel>
                <OrderFormInput type="text" onChange={(e) => setAddress(e.target.value)} required></OrderFormInput></>}
              {orderMethod === "Delivery" && <><OrderFormLabel>Floor:</OrderFormLabel>
                <OrderFormInput min="0" onChange={(e) => setFloor(+e.target.value)} type="number"></OrderFormInput></>}
              {orderMethod === "Delivery" && <><OrderFormLabel>Apartment Number:</OrderFormLabel>
                <OrderFormInput min="0" onChange={(e) => setApartmentNumber(+e.target.value)} type="number"></OrderFormInput></>}
              <OrderFormLabel>Email:</OrderFormLabel>
              <OrderFormInput type="email" onChange={(e) => setEmail(e.target.value)} required></OrderFormInput>
              <OrderFormLabel>Phone:</OrderFormLabel>
              <OrderFormInput type="tel" onChange={(e) => setPhoneNumber(e.target.value)} required></   OrderFormInput>
              <OrderFormLabel>Order Comment:</OrderFormLabel>
              <OrderFormInput type="text" onChange={(e) => setOrderNotes(e.target.value)}></OrderFormInput>
              <SaveOrderDetailsButton>Save Deatils</SaveOrderDetailsButton>
              <br />
              <br />
            </OrderForm>}
            <TotalSummary>
              <TotalSummaryTitle>CART TOTALS</TotalSummaryTitle>
              <TotalSummaryRow>
                <TotalSummaryCell>Cart Subtotal</TotalSummaryCell>
                <TotalSummaryCell>{cartItems ? '$' + getCartTotal(cartItems) : '0'}</TotalSummaryCell>
              </TotalSummaryRow>
              {user && <TotalSummaryRow> <TotalSummaryCell>Membership Discount </TotalSummaryCell>
                <TotalSummaryCell>5%</TotalSummaryCell> </TotalSummaryRow>}
              <TotalSummaryRow>
                <TotalSummaryCell>Order Total</TotalSummaryCell>
                <TotalSummaryCell>{cartItems ? '$' : '0'}{user ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems)}</TotalSummaryCell>
              </TotalSummaryRow>
            </TotalSummary>
            {loading && <Loader />}
            {!sdkReady ? <Loader /> : isFormValid && !loading ? <PaypalWrapper><PayPalButton amount={user ? getCartTotalForLoggedUser(cartItems) : getCartTotal(cartItems)} onSuccess={successPaymentHandler}
              catchError={errorPaymentHandler}
              onError={errorPaymentHandler}
            /></PaypalWrapper> : null
            }


          </>}

          <LinksContainer>
            {cartItems.length === 0 && <CheckoutLink to="/order">BACK TO MENU</CheckoutLink>}
          </LinksContainer>

        </CheckoutSection>}
        {order?.id && <CheckoutSection> <CheckoutTitle> Order Completed!</CheckoutTitle>
          <CheckoutSubTitle>An email with your order details has been sent to your mail.</CheckoutSubTitle>

        </CheckoutSection>}
      </CheckoutSectionWrapper>
    </>
  );
};

export default Checkout;
