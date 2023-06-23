import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "../Checkout Item/checkout-item.component";
import "./checkout-items-container.styles.css"

const CheckoutItemsContainer = () => {

    const { cartItems } = useContext(CartContext);

    return(
        <div className="checkout-items-container">
                <div className="labels-container">
                    <span className="checkout-label">Product</span>
                    <span className="checkout-label">Description</span>
                    <span className="checkout-label">Quantity</span>
                    <span className="checkout-label">Price</span>
                    <span className="checkout-label-remove">Remove</span>
                </div>
                {
                    cartItems.map((item) => {
                        return <CheckoutItem item = {item} key={item.id} />
                      
                    })
                }
            </div>
    )
}

export default CheckoutItemsContainer;