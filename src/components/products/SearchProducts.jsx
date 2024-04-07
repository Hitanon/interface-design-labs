import { useEffect, useState } from "react";

import useProducts from "../../hooks/useProducts";
import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../../utils/Consts";

import ProductOrderer from "./ProductOrderer";
import SearchProductsFilters from "./filters/SearchProductsFilters";
import Products from "./Products";

import "./products.css";


const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const { search } = useProducts();
  const { parseUrlParams, getUrlParams, clearParams, applyFilters } = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    setProducts(await search(getUrlParams()));
  };

  const onSubmitClick = async () => {
    await applyFilters();
    setIsChanged(!isChanged);
  };

  const onClearClick = async () => {
    clearParams();
    await applyFilters();
    setIsChanged(!isChanged);
  };

  useEffect(() => {
    loadProducts();
    return clearParams;
  }, []);

  useEffect(() => {
    loadProducts();
    return clearParams();
  }, [isChanged]);

  return (
    <div className="search-products-section">
      <div className="serch-products-filteres">
        <SearchProductsFilters />
        <button className="button-apply" onClick={onSubmitClick}>{APPLY_FILTERS_BUTTON_TEXT}</button>
        <button className="button-clear" onClick={onClearClick}>{CLEAR_FILTERS_BUTTON_TEXT}</button>
      </div>
      <div className="search-product-body">
        <ProductOrderer />
        <Products products={products} />
      </div>
    </div>
  );
};

export default SearchProducts;
