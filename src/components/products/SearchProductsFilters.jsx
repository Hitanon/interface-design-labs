import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import ProductCategoryFilter from "./filters/ProductCategoryFilter";


const SearchProductsFilters = () => {
  const { applyFilters } = useSearch();

  const onSubmitClick = () => {
    applyFilters();
  };

  return (
    <>
      <ProductCategoryFilter />
      <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
    </>
  );
};

export default SearchProductsFilters;
