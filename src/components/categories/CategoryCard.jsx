import { useNavigate } from "react-router-dom";

import { SEARCH_PRODUCTS_ROUTE } from "../../utils/Consts";

import ImageField from "../ui/ImageField";

import "./categories.css";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const onCategoryClick = () => {
    navigate(SEARCH_PRODUCTS_ROUTE);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onCategoryClick();
    }
  };

  return (
    <div
      className="category"
      tabIndex={0}
      role="button"
      onClick={onCategoryClick}
      onKeyDown={onKeyDown}
    >
      <ImageField url={category.image} alt={category.name} className="category-image-field" />
      <h3>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
