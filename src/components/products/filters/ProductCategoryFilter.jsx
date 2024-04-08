import { useEffect, useState } from "react";

import useCategories from "../../../hooks/useCategories";
import SelectItemList from "../../general/SelectItemList";
import useSearch from "../../../hooks/useSearch";
import { CATEGORY_FILTER_LABEL } from "../../../utils/Consts";

import "./filters.css";


const ProductCategoryFilter = () => {
  const PARAM_NAME = "category";
  const { getAll } = useCategories();
  const { search } = useSearch();
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const setCategory = (category) => {
    search.addParam({ name: PARAM_NAME, value: category.id });
  };

  const clearCategory = () => {
    search.clearParam(PARAM_NAME);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <h2>
        {CATEGORY_FILTER_LABEL}
      </h2>
      <SelectItemList
        items={categories}
        setItem={setCategory}
        clearSelected={clearCategory}
        itemClassName="select-item"
      />
    </>
  );
};

export default ProductCategoryFilter;
