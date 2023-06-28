import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { ShopItemContainer, ItemImage, Footer } from "./shop-item.styles";
import Button from "../Button/button.component";

const ShopItem = ({item}) => {

    const { addItemToCart } = useContext(CartContext);

    const addItem = () => {
        addItemToCart(item);
    }

    const { id, name, imgUrl, price } = item;

    return(
        <ShopItemContainer key={id}>
            <ItemImage alt = {name} src = {imgUrl} />
            <Footer>
                <span>{name}</span>
                <span>${price}</span>
            </Footer>
            <Button buttonType="inverted" onClick = {addItem}>
                Add to cart
            </Button>
        </ShopItemContainer>
    )
}

export default ShopItem;