import data from "../../shop-data.json";
import ShopItem from "../../components/Shop Item/shop-item.component";
import "./shop.styles.css";

const Shop = () => {

    return(
        <div className="shop-items">
            {
                data.map((item) => {
                    return <ShopItem item = {item} key={item.id} />
                })
            }
        </div>
    )
}

export default Shop;