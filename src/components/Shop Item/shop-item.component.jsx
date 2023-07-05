import { useSelector, useDispatch } from 'react-redux';

import { ShopItemContainer, ItemImage, Footer } from "./shop-item.styles";
import Button from "../Button/button.component";
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ShopItem = ({item}) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addItem = () => dispatch(addItemToCart(cartItems, item));
    

    const { name, imgUrl, price } = item;

    return(
        <ShopItemContainer>
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