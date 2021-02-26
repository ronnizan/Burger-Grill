import { CartItem } from '../redux/types/cartTypes';


export const getCartTotal = (cartItems:CartItem[])=>{
  return +cartItems?.reduce((amount, item) => item.price + amount, 0).toFixed(2);
}

// with 5% discount:
export const getCartTotalForLoggedUser = (cartItems:CartItem[])=>{
  return +(+cartItems?.reduce((amount, item) => item.price + amount, 0).toFixed(2) - +cartItems?.reduce((amount, item) => item.price + amount, 0) * 0.05).toFixed(2);
}