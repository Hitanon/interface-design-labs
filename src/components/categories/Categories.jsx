import CategoryCard from "./CategoryCard";


const Categories = ({ categories }) => {
  return (
    <>
      <div>
        {
          categories.map(category => <CategoryCard key={category.id} id={category.id} />)
        }
      </div>
    </>
  );
};

export default Categories;
