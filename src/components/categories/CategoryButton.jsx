import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

import "./categories.css";
import { CATEGORIES_ROUTE } from "../../utils/Consts";


const CategoryButton = ({ category }) => {
  const navigate = useNavigate();

  const onCategoryClick = () => {
    navigate(CATEGORIES_ROUTE)
  };

  return (
    <div className="category-button" onClick={onCategoryClick}>
      {category.name}
    </div>
  );
};

export default CategoryButton;
