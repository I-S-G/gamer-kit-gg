import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import Button from "../Button/button.component";
import "./shop-item.styles.css";

const ShopItem = ({item}) => {

    const { addItemToCart } = useContext(CartContext);

    const addItem = () => {
        addItemToCart(item);
    }

    return(
        <div className="shop-item-container" key={item.id}>
            <img alt = {item.name} src = {item.imgUrl} className="shop-item-image" />
            <div className="footer">
                <span>{item.name}</span>
                <span>${item.price}</span>
            </div>
            <Button label= "Add to cart" buttonType="inverted" custom = "add-to-cart-button" onClick = {addItem}  />
        </div>
    )
}

export default ShopItem;