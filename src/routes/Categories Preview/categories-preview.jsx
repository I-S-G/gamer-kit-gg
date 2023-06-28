import { useContext } from "react";
import { CategoriesContext } from "../../context/categories-context";
import CategoryPreview from "../../components/Category Preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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