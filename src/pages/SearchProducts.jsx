import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import Products from "../components/products/Products";
import useSearch from "../hooks/useSearch";
import SearchProductsFilters from "../components/products/SearchProductsFilters";
import useProducts from "../hooks/useProducts";
import ProductOrderer from "../components/products/ProductOrderer";
import TextButton from "../components/ui/TextButton";
import { APPLY_FILTERS_BUTTON_TEXT, CLEAR_FILTERS_BUTTON_TEXT } from "../utils/Consts";


const SearchProducts = observer(() => {
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
    clearParams();
  }, [isChanged]);

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
      <Products products={products} />
      <hr />
      <Footer />
    </>
  );
});

export default SearchProducts;
