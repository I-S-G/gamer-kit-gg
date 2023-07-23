import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCategoriesStart } from '../../store/categories/categories.action';
import CategoriesPreview from "../Categories Preview/categories-preview";
import Category from "../Category/category";


const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCategoriesStart());  
    }, [dispatch]);
  
    return(
        <Routes>
            <Route index element = {<CategoriesPreview />} />
            <Route path = ":category" element = {<Category />} />
        </Routes>
    )
}

export default Shop;