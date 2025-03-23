import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div className="col-12 col-sm-6 col-lg-3 col-xxl-2" key={category.id}>
          <CategoryCard category={category} />
        </div>
      ))}
    </>
  );
};

export default Categories;
