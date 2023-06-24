import { useContext } from "react";
import { CategoriesContext } from "../../context/categories-context";
import ShopItem from "../../components/Shop Item/shop-item.component";
import "./shop.styles.css";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return(
        <>
            {
                Object.keys(categoriesMap).map(title => (
                        <div key = {title} >
                            <h2 className="shop-category-title">{title}</h2>
                            <div className="shop-items">
                                {
                                    categoriesMap[title].map((item) => {
                                        return <ShopItem item = {item} key={item.id} />
                                    })
                                }
                            </div>
                        </div>
                    )
                )
            }

        </>
    )
}

export default Shop;