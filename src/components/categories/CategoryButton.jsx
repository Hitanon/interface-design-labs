import useSearch from "../../hooks/useSearch";


const CategoryButton = ({ category }) => {
  const { addParam, applyFilters } = useSearch();

  const onCategoryClick = () => {
    addParam("category", category.id);
    applyFilters();
  };

  return (
    <>
      <div onClick={onCategoryClick}>
        Category: {category.name}
      </div>
    </>
  );
};

export default CategoryButton;
