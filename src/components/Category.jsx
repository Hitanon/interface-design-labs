import ImageField from "./ui/ImageField";

const Category = ({ category }) => {
  return (
    <>
      <div>
        <ImageField />
      </div>
      {category.name}
    </>
  );
};

export default Category;
