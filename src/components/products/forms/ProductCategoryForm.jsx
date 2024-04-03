import { useContext, useEffect, useState } from "react";

import useCategories from "../../../hooks/useCategories";
import SelectItemList from "../../general/SelectItemList";
import { Context } from "../../..";


const ProductCategoryForm = () => {
  const { editProduct } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const { getAll } = useCategories();

  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const onSelect = (category) => {
    editProduct.setCategory(category.id);
  };

  const clearSelected = (category) => {
    editProduct.clearCategory();
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <SelectItemList items={categories} setItem={onSelect} clearSelected={clearSelected} />
    </>
  );
};

export default ProductCategoryForm;
