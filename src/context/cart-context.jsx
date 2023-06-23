import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeCartItem: () => null,
    increaseCartItem: () => null,
    decreaseCartItem: () => null,
    cartQuantity: 0,
    totalPrice: 0
});

export const CartProvider = ({children}) => {

    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartQuantity, setCartQuantity ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        const newQuantity = cartItems.reduce((count, item) => {
            return count + item.quantity;
        }, 0);
        const newPrice = cartItems.reduce((price, item) => {
            return price + (item.quantity * item.price);
        }, 0);

        setCartQuantity(newQuantity);
        setTotalPrice(newPrice);
    }, [cartItems]);

    const addedCartItems = (cartItems, itemToAdd) => {
        const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);
        if(existingCartItem) {
            return cartItems.map((item) => item.id === existingCartItem.id? {...item, quantity: item.quantity+ 1} : item);
        }

        return [...cartItems, {...itemToAdd, quantity: 1}];
    }

    const addItemToCart = (item) => {
        setCartItems(addedCartItems(cartItems, item));
    }

    const removeCartItem = (itemToRemove) => {
        setCartItems(cartItems.filter((item) => itemToRemove.id === item.id? false: true ));
    }

    const increaseCartItem = (itemToIncrease) => {
        const newItems = cartItems.map((item) => item.id === itemToIncrease.id? {...item, quantity: item.quantity + 1}: item);
        setCartItems(newItems);
    }

    const decreaseCartItem = (itemToDecrease) => {
        if(itemToDecrease.quantity > 1) {
            const newItems = cartItems.map((item) => item.id === itemToDecrease.id? {...itemToDecrease, quantity: itemToDecrease.quantity - 1}: item);
            setCartItems(newItems);
        }
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartQuantity, removeCartItem, increaseCartItem, decreaseCartItem, totalPrice };
    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}