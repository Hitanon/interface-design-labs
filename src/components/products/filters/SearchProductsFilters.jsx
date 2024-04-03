import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductPriceBoundedFilter from "./ProductPriceBoundedFilter";
import ProductRatingBoundedFilter from "./ProductRatingBoundedFilter";


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
