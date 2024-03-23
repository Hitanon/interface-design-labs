import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import ProductCategoryFilter from "./filters/ProductCategoryFilter";
import ProductPriceBoundedFilter from "./filters/ProductPriceBoundedFilter";
import ProductRatingBoundedFilter from "./filters/ProductRatingBoundedFilter";


const SearchProductsFilters = () => {
  const { applyFilters } = useSearch();

  const onSubmitClick = () => {
    applyFilters();
  };

  return (
    <>
      <ProductCategoryFilter />
      <ProductPriceBoundedFilter />
      <ProductRatingBoundedFilter />
      <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
    </>
  );
};

export default SearchProductsFilters;
