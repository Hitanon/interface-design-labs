import ImageField from "../ui/ImageField";
import { useNavigate } from "react-router-dom";
import { SEARCH_PRODUCTS_ROUTE } from "../../utils/Consts";

import "./categories.css";


const CategoryCard = ({ category }) => {

  const navigate = useNavigate();

  const onCategoryClick = () => {
    navigate(SEARCH_PRODUCTS_ROUTE);
  }

  return (
    <div className="category" onClick={onCategoryClick}>
      <ImageField url={category.image} className="category-image-field" />

      <h3>
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
