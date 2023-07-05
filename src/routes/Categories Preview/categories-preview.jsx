import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/Category Preview/category-preview.component";

const CategoriesPreview = () => {
    const categoriesMap  = useSelector(selectCategoriesMap);

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview title = {title} products = {products} key={title} />
                })
            }
        </>
    )
    
}

export default CategoriesPreview;