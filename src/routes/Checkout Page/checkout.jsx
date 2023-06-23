import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItemsContainer from "../../components/Checkout Items Container/checkout-items-container.component";
import "./checkout.styles.css";

const Checkout = () => {

    const { totalPrice } = useContext(CartContext);

    return(
        <div className="checkout-page">
            <CheckoutItemsContainer />
            <div className="total">
                <p>Total: ${totalPrice}</p>
            </div>
        </div>
    )
}

export default Checkout;