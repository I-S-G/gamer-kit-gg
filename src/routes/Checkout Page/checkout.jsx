import { useSelector } from "react-redux";

import CheckoutItemsContainer from "../../components/Checkout Items Container/checkout-items-container.component";
import { CheckoutContainer, CheckoutTotal } from "./checkout.styles";
import { selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {

    const totalPrice = useSelector(selectCartTotal)

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