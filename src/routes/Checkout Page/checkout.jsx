import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItemsContainer from "../../components/Checkout Items Container/checkout-items-container.component";
import { CheckoutContainer, CheckoutTotal } from "./checkout.styles";

const Checkout = () => {

    const { totalPrice } = useContext(CartContext);

    return(
        <CheckoutContainer>
            <CheckoutItemsContainer />
            <CheckoutTotal>
                <p>Total: ${totalPrice}</p>
            </CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;