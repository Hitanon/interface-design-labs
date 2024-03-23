import ProductCategoryFilter from "./filters/ProductCategoryFilter";
import ProductPriceBoundedFilter from "./filters/ProductPriceBoundedFilter";
import ProductRatingBoundedFilter from "./filters/ProductRatingBoundedFilter";


const SearchProductsFilters = () => {
  return (
    <>
      <ProductCategoryFilter />
      <ProductPriceBoundedFilter />
      <ProductRatingBoundedFilter />
    </>
  );
};

export default SearchProductsFilters;
