import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { Items } from "./category.styles";
import ShopItem from "../../components/Shop Item/shop-item.component";

const Category = () => {
    
    const { category } = useParams();
    console.log("render/re-rendering category");
    const categoriesMap = useSelector(selectCategoriesMap);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log("effect fired/ calling set products");
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