import "./category-item.styles.css";

const CategoryItem = ({item}) => {
    return(
        <div className= "category-item-container"  >
            <div className = "background-image-container" style= {{
                backgroundImage: `url(${item.imgUrl})`
            }} />
            <div className = "category-body-container">
                <p>{item.name}</p>
                <p>Shop Now</p>
            </div>
         </div>
    )
}

export default CategoryItem;