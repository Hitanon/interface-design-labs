import { useEffect, useState } from "react";

import useProducts from "../../hooks/useProducts";
import useSearch from "../../hooks/useSearch";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../../utils/Consts";
import TextButton from "../ui/TextButton";

import ProductOrderer from "./ProductOrderer";
import SearchProductsFilters from "./filters/SearchProductsFilters";
import Products from "./Products";


const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const { search } = useProducts();
  const { parseUrlParams, getUrlParams, clearParams, applyFilters} = useSearch();

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
    <>
      <ProductOrderer />
      <hr />
      <SearchProductsFilters />
      <hr />
      <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
      <TextButton text={CLEAR_FILTERS_BUTTON_TEXT} callback={onClearClick} />
      <hr />
      <Products products={products} />
    </>
  );
};

export default SearchProducts;
