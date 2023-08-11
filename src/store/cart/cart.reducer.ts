import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, toggleCart } from "./cart.action";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload
        }
    }

    if (toggleCart.match(action)) {
        return {
            ...state,
            isCartOpen: !state.isCartOpen
        }
    }
    
    return state;

}