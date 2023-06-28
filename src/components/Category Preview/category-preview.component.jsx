import ShopItem from "../Shop Item/shop-item.component";
import { Link } from "react-router-dom";
import { ShopCategoryTitle, CategoryPreviewItems} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {


    return(
        <>
            <ShopCategoryTitle>
                <Link to= {title} style= {{
                    color: "black"
                }} >{title}</Link>
            </ShopCategoryTitle>               
            <CategoryPreviewItems>
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((item) => {
                        return <ShopItem item = {item} key={item.id} />
                    })
                }
            </CategoryPreviewItems>
        </>
    )
}

export default CategoryPreview;