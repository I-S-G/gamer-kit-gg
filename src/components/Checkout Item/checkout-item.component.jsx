import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./checkout-item.styles.css";

const CheckoutItem = ({item}) => {

    const { name, imgUrl, quantity, price } = item;
    const { removeCartItem, increaseCartItem, decreaseCartItem } = useContext(CartContext);

    const removeItem = () => removeCartItem(item);
    const increaseItem = () => increaseCartItem(item);
    const decreaseItem = () => decreaseCartItem(item);

    return(
        <div className="checkout-item">
            <img src={imgUrl} alt= {name} className="checkout-item-img" />
            <span className="checkout-item-name">{name}</span>
            <span className="checkout-item-quantity">
                <div className="quantity-change-button" onClick={decreaseItem}> &#10094; </div>
                <span className="quantity-number">{quantity}</span>
                <div className="quantity-change-button" onClick={increaseItem}> &#10095; </div>
            </span>
            <span className="checkout-item-price">${price}</span>
            <div className="remove-checkout-item-button" onClick={removeItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;