import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { Context } from "..";
import { SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE } from "../utils/Consts";

import Category from "./Category";


const Categories = ({ categories }) => {
  const { searchProducts } = useContext(Context);

  const navigate = useNavigate();

  const onCategoryClick = (categoryId) => {
    searchProducts.setCategory(categoryId);
    navigate(`${SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE}`);
  };

  return (
    <>
      <div>
        Categories
      </div>
      <ul>
        {categories.map(
          (category) =>
            <li onClick={() => onCategoryClick(category.id)} key={category.id}><Category category={category} /></li>
        )}
      </ul>
    </>
  );
};

export default Categories;
