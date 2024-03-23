import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import useSearch from "../hooks/useSearch";
import SearchProductsFilters from "../components/products/SearchProductsFilters";
import { Context } from "..";
import useProducts from "../hooks/useProducts";
import ProductsOrderer from "../components/orderers/ProductsOrderer";


const SearchProducts = observer(() => {
  const { searchProducts } = useContext(Context);
  const { search } = useProducts();
  const { parseUrlParams, getUrlParams, clearParams} = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    searchProducts.setProducts(await search(getUrlParams()));
  };

  useEffect(() => {
    loadProducts();
    return clearParams;
  }, []);

  return (
    <>
      <Header />
      <hr />
      <ProductsOrderer />
      <hr />
      {/* <SearchFilters /> */}
      <SearchProductsFilters />
      <hr />
      <Products products={searchProducts.products} />
      <hr />
      <Footer />
    </>
  );
});

export default SearchProducts;
