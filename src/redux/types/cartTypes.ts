import { USER_LOGOUT } from "../constants/authConstants";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants/cartConstants";

export interface RegularCartItem {
  id: string
  image: string;
  price: number;
  title: string;
  description: string;
}
export interface BurgerCartItem {
  id: string
  image: string;
  price: number;
  title: string;
  description: string;
  burgerSize: string;
  cookingLevel: string;
  changes: {
    noOnion: boolean;
    noLettuce: boolean;
    noTomato: boolean;
    noPickle: boolean;
    noVegetables: boolean;
    vegetablesOnTheSide: boolean;
  }
}
export interface MealCartItem {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
  burgerSize: string;
  cookingLevel: string;
  burger: BurgerCartItem;
  sideDish: string;
  drink: string;
}



export interface Cart {
  cartItems: (RegularCartItem | BurgerCartItem | MealCartItem)[];
}

// export interface SignUpData {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface SignInData {
//   email: string;
//   password: string;
// }

interface AddItemToCart {
  type: typeof ADD_ITEM_TO_CART;
  payload: RegularCartItem | BurgerCartItem;
}
interface RemoveItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: string
}

// interface UserActionRegisterSuccess {
//   type: typeof USER_REGISTER_SUCCESS;
//   payload: string;
// }
// interface UserActionRegisterFail {
//   type: typeof USER_REGISTER_FAIL;
//   payload: string;
// }
// interface UserActionLoginRequest {
//   type: typeof USER_LOGIN_REQUEST;
// }
// interface UserActionLoginSuccess {
//   type: typeof USER_LOGIN_SUCCESS;
//   payload: User;
// }
// interface UserActionLoginFail {
//   type: typeof USER_LOGIN_FAIL;
//   payload: string;
// }

// interface SetUserAction {
//   type: typeof SET_USER;
//   payload: User;
// }

interface SignOutAction {
  type: typeof USER_LOGOUT;
}

// interface SetErrorAction {
//   type: typeof RESET_ERROR;
// }

export type CartAction = AddItemToCart | RemoveItemFromCart | SignOutAction;

