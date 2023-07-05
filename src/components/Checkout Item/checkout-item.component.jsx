import { useSelector, useDispatch } from 'react-redux';

import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { 
    CheckoutItemContainer,
    ItemImage,
    ItemName,
    ItemQuantityContainer,
    QuantityChangeButton,
    QuantityNumber,
    ItemPrice,
    RemoveItemButton
    } from "./checkout-item.styles";



const CheckoutItem = ({item}) => {

    const { name, imgUrl, quantity, price } = item;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const clearItem = () => dispatch(clearItemFromCart(cartItems, item));
    const addItem = () => dispatch(addItemToCart(cartItems, item));
    const removeItem = () => dispatch(removeItemFromCart(cartItems, item));

    return(
        <CheckoutItemContainer>
            <ItemImage src={imgUrl} alt= {name} />
            <ItemName>{name}</ItemName>
            <ItemQuantityContainer>
                <QuantityChangeButton onClick={removeItem}> &#10094; </QuantityChangeButton>
                <QuantityNumber> {quantity} </QuantityNumber>
                <QuantityChangeButton onClick={addItem}> &#10095; </QuantityChangeButton>
            </ItemQuantityContainer>
            <ItemPrice>${price}</ItemPrice>
            <RemoveItemButton onClick={clearItem}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;