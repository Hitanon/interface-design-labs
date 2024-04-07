import useSearch from "../../hooks/useSearch";

import "./categories.css";


const CategoryButton = ({ category }) => {
  const { addParam, applyFilters } = useSearch();

  const onCategoryClick = () => {
    addParam("category", category.id);
    applyFilters();
  };

  return (
    <div className="category-button" onClick={onCategoryClick}>
      {category.name}
    </div>
  );
};

export default CategoryButton;
