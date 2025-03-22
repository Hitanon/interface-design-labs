import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../../utils/Consts";

import ProductOrderer from "./ProductOrderer";
import SearchProductsFilters from "./filters/SearchProductsFilters";
import Products from "./Products";

import "./products.css";


const SearchProducts = observer(() => {
  const { search } = useContext(Context);
  // const { clearParams, applyFilters } = useSearch();

  const loadProducts = async () => {
    // applyFilters();
  };

  const onSubmitClick = async () => {
    // await applyFilters();
  };

  const onClearClick = async () => {
    // clearParams();
    // await applyFilters();
  };

  useEffect(() => {
    // loadProducts();
    // return clearParams;
  }, []);

  return (
    <div className="search-products-section">
      <div className="serch-products-filteres">
        <SearchProductsFilters />
        <button className="button-apply" onClick={onSubmitClick}>{APPLY_FILTERS_BUTTON_TEXT}</button>
        <button className="button-clear" onClick={onClearClick}>{CLEAR_FILTERS_BUTTON_TEXT}</button>
      </div>
      <div className="search-product-body">
        <ProductOrderer />
        <Products products={search.products} />
      </div>
    </div>
  );
});


export default SearchProducts;
