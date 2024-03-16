import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import useSearch from "../hooks/useSearch";
import SearchFilters from "../components/filters/SearchFilters";
import { Context } from "..";
import useProducts from "../hooks/useProducts";


const SearchProducts = observer(() => {
  const { searchProducts } = useContext(Context);
  const { search } = useProducts();
  const { parseUrlParams, getUrlParams } = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    searchProducts.setProducts(await search(getUrlParams()));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <SearchFilters />
      <hr />
      <Products products={searchProducts.products} />
      <hr />
      <Footer />
    </>
  );
});

export default SearchProducts;
