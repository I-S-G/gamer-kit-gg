import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "../../context/categories-context";
import { Items } from "./category.styles";
import ShopItem from "../../components/Shop Item/shop-item.component";

const Category = () => {
    
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return(
        <div>
            <h2 
            style = {{
                textAlign: "center"
            }}>
                {category.toUpperCase()}
            </h2>
            
            <Items>
                {
                    products && products.map((product) => {
                        return <ShopItem item = {product} key = {product.id} />
                    })
                }
            </Items>
        </div>
    )
}

export default Category;