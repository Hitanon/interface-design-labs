import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductPriceBoundedFilter from "./ProductPriceBoundedFilter";
import ProductRatingBoundedFilter from "./ProductRatingBoundedFilter";


const SearchProductsFilters = () => {
  return (
    <div className="row">
      <ProductCategoryFilter />
      <ProductPriceBoundedFilter />
      <ProductRatingBoundedFilter />
    </div>
  );
};

export default SearchProductsFilters;
