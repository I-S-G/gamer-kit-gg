import { createAction } from "../../utils/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types";


const addCartItem = (cartItems, itemToAdd) => {

    const itemExists = cartItems.find((item) => item.id === itemToAdd.id);

        if (itemExists) {
            return cartItems.map((item) => item.id === itemExists.id? {...item, quantity: item.quantity + 1}: item);
        } 

        return [...cartItems, {...itemToAdd, quantity: 1 } ];
}

const decreaseItemQuantity = (cartItems, itemToDecrease) => {
    if (itemToDecrease.quantity > 1) {
        return cartItems.map((item) => item.id === itemToDecrease.id? {...item, quantity: item.quantity -  1} : item );
    }

    return cartItems.filter((item) => item.id !== itemToDecrease.id);
}

const clearCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
}

export const toggleCart = () => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART);
};

export const addItemToCart = (cartItems, itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd); 
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToDecrease) => {
    const newCartItems = decreaseItemQuantity(cartItems, itemToDecrease);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    const newCartItems = clearCartItem(cartItems, itemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};