import { useSelector } from "react-redux";

import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";
import Spinner from '../../components/Spinner/spinner.component';
import CategoryPreview from "../../components/Category Preview/category-preview.component";

const CategoriesPreview = () => {
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            {
                isLoading? (
                    <Spinner />
                ): (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoryPreview title = {title} products = {products} key={title} />
                    })
                )
                
            }
        </>
    )
    
}

export default CategoriesPreview;