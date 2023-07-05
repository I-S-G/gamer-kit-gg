import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartItemsContainer, CartItemsList, CheckoutButton, CartItem, CartItemImg, CartItemDetails, Empty} from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate("checkout");
    }


    return(
        <CartItemsContainer>
            <CartItemsList>
                {
                    cartItems.length? 
                    cartItems.map((cartItem) => {
                        const { id, name, imgUrl, quantity, price } = cartItem;
                        return (
                            <CartItem key={id}> 
                                <CartItemImg src= {imgUrl} alt= {name} />
                                <CartItemDetails>
                                    <span> {name} </span>
                                    <span>{quantity} x ${price}</span>
                                </CartItemDetails>
                            </CartItem>
                        )
                    }): <Empty> Cart is Empty </Empty>
                }
            </CartItemsList>

                <CheckoutButton onClick = {goToCheckoutHandler}>
                    go to checkout
                </CheckoutButton>

    </CartItemsContainer>
    )
}

export default CartDropdown;
