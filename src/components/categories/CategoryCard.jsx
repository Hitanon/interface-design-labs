import ImageField from "../ui/ImageField";
import useSearch from "../../hooks/useSearch";

import "./categories.css";


const CategoryCard = ({ category }) => {
  const { addParam, applyFilters } = useSearch();

  const onCategoryClick = () => {
    addParam("category", category.id);
    applyFilters();
  };

  return (
    <div className="category" onClick={onCategoryClick}>
      <ImageField />

      <h3>
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
