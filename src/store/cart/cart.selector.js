import { createSelector } from 'reselect';

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.cartItems
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.isCartOpen
);

export const selectCartQuantity = createSelector(
    [selectCartItems],
    (cartItems) =>  cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) =>  cartItems.reduce((totalPrice, cartItem) => totalPrice + (cartItem.price * cartItem.quantity), 0)
);

