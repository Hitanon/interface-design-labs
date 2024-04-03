import CategoryCard from "./CategoryCard";


const Categories = ({ categories }) => {
  return (
    <>
      <div className="categories-list">
        {
          categories.map(category => <div key={category.id}><CategoryCard category={category} /></div>)
        }
      </div>
    </>
  );
};

export default Categories;
