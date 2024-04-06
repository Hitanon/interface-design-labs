import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import ProductOrderer from "./ProductOrderer";
import SearchProductsFilters from "./filters/SearchProductsFilters";
import Products from "./Products";


const SearchProducts = observer(() => {
  const { search } = useContext(Context);
  const { parseUrlParams, clearParams, applyFilters} = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    applyFilters();
  };

  const onSubmitClick = async () => {
    await applyFilters();
  };

  const onClearClick = async () => {
    clearParams();
    await applyFilters();
  };

  useEffect(() => {
    loadProducts();
    return clearParams;
  }, []);

  return (
    <>
      <ProductOrderer />
      <hr />
      <SearchProductsFilters />
      <hr />
      <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
      <TextButton text={CLEAR_FILTERS_BUTTON_TEXT} callback={onClearClick} />
      <hr />
      <Products products={search.products} />
    </>
  );
});

export default SearchProducts;
