import CategoryCard from "./CategoryCard";


const Categories = ({ categories }) => {
  return (
    <>
      <div className="categories-list">
        {
          categories.map(category => <CategoryCard key={category.id} id={category.id} />)
        }
      </div>
    </>
  );
};

export default Categories;
