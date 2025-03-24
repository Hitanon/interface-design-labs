import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import {
  APPLY_FILTERS_BUTTON_TEXT,
  CLEAR_FILTERS_BUTTON_TEXT,
} from "../../utils/Consts";

import ProductOrderer from "./ProductOrderer";
import SearchProductsFilters from "./filters/SearchProductsFilters";
import Products from "./Products";

import "./products.css";

const SearchProductsList = observer(() => {
  const { search } = useContext(Context);
  // const { clearParams, applyFilters } = useSearch();

  // const loadProducts = async () => {
  //   // applyFilters();
  // };

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
    <div className="container page-footer-bottom search-products-section">
      <div className="row gy-5 py-5">
        <div className="col-12 col-xl-3 serch-products-filteres">
          <SearchProductsFilters />
          <button className="button-apply" onClick={onSubmitClick}>
            {APPLY_FILTERS_BUTTON_TEXT}
          </button>
          <button className="button-clear" onClick={onClearClick}>
            {CLEAR_FILTERS_BUTTON_TEXT}
          </button>
        </div>
        <div className="col-12 col-xl-8 offset-xl-1">
          <ProductOrderer />
          <Products products={search.products} />
        </div>
      </div>
    </div>
  );
});

export default SearchProductsList;
