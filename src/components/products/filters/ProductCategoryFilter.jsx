import { useEffect, useState } from "react";

import useCategories from "../../../hooks/useCategories";
import SelectFilter from "../../filters/SelectFilter";
import useSearch from "../../../hooks/useSearch";
import { CATEGORY_FILTER_LABEL } from "../../../utils/Consts";


const ProductCategoryFilter = () => {
  const PARAM_NAME = "category";
  const { getAll } = useCategories();
  const { search } = useSearch();
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAll());
  };

  const setCategory = (category) => {
    console.log(category);
    search.addParam({name: PARAM_NAME, value: category.id});
  };

  const clearCategory = () => {
    search.clearParam(PARAM_NAME);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <SelectFilter
        label={CATEGORY_FILTER_LABEL}
        items={categories}
        setItem={setCategory}
        clearSelected={clearCategory}
      />
    </>
  );
};

export default ProductCategoryFilter;
