import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../../components/Spinner/spinner.component";
import { Items } from "./category.styles";
import ShopItem from "../../components/Shop Item/shop-item.component";

const Category = () => {
    
    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

    const [ products, setProducts ] = useState(categoriesMap[category]);

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
            {
                isLoading? (
                    <Spinner />
                ):
                 
                (
                    <Items>
                        {
                            products && products.map((product) => {
                                return <ShopItem item = {product} key = {product.id} />
                            })
                        }
                    </Items>
                )
            }
        </div>
    )
}

export default Category;