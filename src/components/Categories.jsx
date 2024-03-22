import { useNavigate } from "react-router-dom";

import useSearch from "../hooks/useSearch";
import { SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE } from "../utils/Consts";

import Category from "./Category";


const Categories = ({ categories }) => {
  const { search } = useSearch();
  const navigate = useNavigate();

  const onCategoryClick = (id) => {
    search.addParam({ name: "category", value: id });
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
