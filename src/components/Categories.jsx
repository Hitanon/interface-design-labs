import { useNavigate } from "react-router-dom";

import { CATEGORIES_ROUTE } from "../utils/Consts";

import Category from "./Category";


const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const onCategoryClick = (categoryId) => {
    navigate(`${CATEGORIES_ROUTE}/${categoryId}`);
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
