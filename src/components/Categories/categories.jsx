import CategoryItems from "../../category-data.json";
import CategoryItem from '../Category Item/category-item';
import "./categories.styles.css";

const Categories = () => {
    return(
        <div className="categories">
            {
                
                CategoryItems.map((item) => {
                    return(
                        <CategoryItem item = {item} key = {item.id} />
                    )
                })
        
            }
        </div>
    )
}

export default Categories;