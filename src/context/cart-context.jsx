import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer.utils";

export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null,
    clearItemFromCart: () => null,
    totalQuantity: 0,
    totalPrice: 0
});

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


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        default:
            throw new Error(`unhandled action type: ${type} in cartReducer`);

    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const CartProvider = ({children}) => {

    const [ { isCartOpen, cartItems, totalQuantity, totalPrice }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newTotalQuantity = newCartItems.reduce((quantity, cartItem) => {
            return (quantity + cartItem.quantity);
        }, 0);

        const newTotalPrice = newCartItems.reduce((price, cartItem) => {
            return (price + (cartItem.price * cartItem.quantity));
        }, 0);
        
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                totalPrice: newTotalPrice, 
                totalQuantity: newTotalQuantity
            }) 
        );   
    };

    const toggleCart = () => {
        dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART));
    };

    const addItemToCart = (itemToAdd) => {
        const newCartItems = addCartItem(cartItems, itemToAdd); 
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (itemToDecrease) => {
        const newCartItems = decreaseItemQuantity(cartItems, itemToDecrease);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (itemToRemove) => {
        const newCartItems = clearCartItem(cartItems, itemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const value = { isCartOpen, cartItems, totalQuantity, totalPrice, addItemToCart, removeItemFromCart, clearItemFromCart, toggleCart };

    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}