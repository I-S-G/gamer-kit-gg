import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
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
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItem = () => clearItemFromCart(item);
    const addItem = () => addItemToCart(item);
    const removeItem = () => removeItemFromCart(item);

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