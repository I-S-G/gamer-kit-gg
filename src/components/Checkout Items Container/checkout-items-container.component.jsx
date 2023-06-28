import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckoutItem from "../Checkout Item/checkout-item.component";
import { ItemsContainer, LabelsContainer, Label, RemoveLabel } from "./checkout-items-container.styles"

const CheckoutItemsContainer = () => {

    const { cartItems } = useContext(CartContext);

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