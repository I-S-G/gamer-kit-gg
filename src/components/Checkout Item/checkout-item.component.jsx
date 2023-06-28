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
    const { removeCartItem, increaseCartItem, decreaseCartItem } = useContext(CartContext);

    const removeItem = () => removeCartItem(item);
    const increaseItem = () => increaseCartItem(item);
    const decreaseItem = () => decreaseCartItem(item);

    return(
        <CheckoutItemContainer>
            <ItemImage src={imgUrl} alt= {name} />
            <ItemName>{name}</ItemName>
            <ItemQuantityContainer>
                <QuantityChangeButton onClick={decreaseItem}> &#10094; </QuantityChangeButton>
                <QuantityNumber> {quantity} </QuantityNumber>
                <QuantityChangeButton onClick={increaseItem}> &#10095; </QuantityChangeButton>
            </ItemQuantityContainer>
            <ItemPrice>${price}</ItemPrice>
            <RemoveItemButton onClick={removeItem}>&#10005;</RemoveItemButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;