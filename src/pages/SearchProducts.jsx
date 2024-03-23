import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import useSearch from "../hooks/useSearch";
import SearchProductsFilters from "../components/products/SearchProductsFilters";
import { Context } from "..";
import useProducts from "../hooks/useProducts";
import ProductOrderer from "../components/products/ProductOrderer";
import TextButton from "../components/ui/TextButton";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../utils/Consts";


const SearchProducts = observer(() => {
  const { searchProducts } = useContext(Context);
  const { search } = useProducts();
  const { parseUrlParams, getUrlParams, clearParams, applyFilters} = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    searchProducts.setProducts(await search(getUrlParams()));
  };

  const onSubmitClick = () => {
    applyFilters();
  };

  const onClearClick = () => {
    clearParams();
    applyFilters();
  };

  useEffect(() => {
    loadProducts();
    return clearParams;
  }, []);

  return (
    <>
      <Header />
      <hr />
      <ProductOrderer />
      <hr />
      <SearchProductsFilters />
      <hr />
      <TextButton text={APPLY_FILTERS_BUTTON_TEXT} callback={onSubmitClick} />
      <TextButton text={CLEAR_FILTERS_BUTTON_TEXT} callback={onClearClick} />
      <hr />
      <Products products={searchProducts.products} />
      <hr />
      <Footer />
    </>
  );
});

export default SearchProducts;
