import { CartContext } from "../../context/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button.component";
import "./cart-dropdown.styles.css";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    return(
        <div className="cart-items-container">
            <div className="cart-items-list">
                {
                    cartItems.map((cartItem) => {
                        const { id, name, imgUrl, quantity, price } = cartItem;
                        return (
                            <div key={id} className="cart-item"> 
                                <img src= {imgUrl} alt= {name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <span> {name} </span>
                                    <span>{quantity} x ${price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to={"/checkout"} className="checkout-link">
                <Button label= "go to checkout" custom="checkout-button" />
            </Link>
    </div>
    )
}

export default CartDropdown;
