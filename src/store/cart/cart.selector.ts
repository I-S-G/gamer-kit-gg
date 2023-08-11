import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { RootState } from '../store';

export const selectCartReducer = (state: RootState): CartState => state.cart;

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

