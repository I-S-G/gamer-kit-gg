import { useSelector } from "react-redux";

import CheckoutItem from "../Checkout Item/checkout-item.component";
import { ItemsContainer, LabelsContainer, Label, RemoveLabel } from "./checkout-items-container.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItemsContainer = () => {

    const cartItems = useSelector(selectCartItems);

    return(
        <ItemsContainer>
                <LabelsContainer>
                    <Label>Product</Label>
                    <Label>Description</Label>
                    <Label>Quantity</Label>
                    <Label>Price</Label>
                    <RemoveLabel>Remove</RemoveLabel>
                </LabelsContainer>
                {
                    cartItems.map((item) => {
                        return <CheckoutItem item = {item} key={item.id} />
                      
                    })
                }
            </ItemsContainer>
    )
}

export default CheckoutItemsContainer;