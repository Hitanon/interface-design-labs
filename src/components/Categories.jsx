import CategoryCard from "./categories/CategoryCard";


const Categories = ({ categories }) => {
  return (
    <>
      <div>
        Categories
      </div>
      <div>
        {
          categories.map(category => <CategoryCard key={category.id} id={category.id} />)
        }
      </div>
    </>
  );
};

export default Categories;
