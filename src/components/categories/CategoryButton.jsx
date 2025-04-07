import { useNavigate } from "react-router-dom";

import "./categories.css";
import { CATEGORIES_ROUTE } from "../../utils/Consts";

const CategoryButton = ({ category }) => {
  const navigate = useNavigate();

  const onCategoryClick = () => {
    navigate(CATEGORIES_ROUTE);
  };

  return (
    <div
      className="category-button"
      tabIndex={0}
      role="button"
      onClick={onCategoryClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onCategoryClick();
        }
      }}
    >
      {category.name}
    </div>
  );
};

export default CategoryButton;
