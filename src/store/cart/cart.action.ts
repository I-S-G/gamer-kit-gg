import { AnyAction } from "redux";
import { CategoryItem } from "../categories/categories.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils"
import { CART_ACTION_TYPES, CartItem } from "./cart.types";


const addCartItem = (cartItems: CartItem[], itemToAdd: CategoryItem) => {

    const itemExists = cartItems.find((item) => item.id === itemToAdd.id);

        if (itemExists) {
            return cartItems.map((item) => item.id === itemExists.id? {...item, quantity: item.quantity + 1}: item);
        } 

        return [...cartItems, {...itemToAdd, quantity: 1 } ];
}

const decreaseItemQuantity = (cartItems: CartItem[], itemToDecrease: CartItem) => {
    if (itemToDecrease.quantity > 1) {
        return cartItems.map((item) => item.id === itemToDecrease.id? {...item, quantity: item.quantity -  1} : item );
    }

    return cartItems.filter((item) => item.id !== itemToDecrease.id);
}

const clearCartItem = (cartItems: CartItem[], itemToRemove: CartItem) => {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
}

export type ToggleCart = Action<CART_ACTION_TYPES.TOGGLE_CART>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const toggleCart = withMatcher((): ToggleCart => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART);
});

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
});

export const addItemToCart = (cartItems: CartItem[], itemToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, itemToAdd); 
    setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], itemToDecrease: CartItem) => {
    const newCartItems = decreaseItemQuantity(cartItems, itemToDecrease);
    setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
    const newCartItems = clearCartItem(cartItems, itemToRemove);
    setCartItems(newCartItems);
};