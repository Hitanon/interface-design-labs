import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { searchProducts } from "../clients/ProductClient";
import Products from "../components/Products";
import useSearch from "../hooks/useSearch";


const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const { parseUrlParams, getUrlParams } = useSearch();

  const loadProducts = async () => {
    parseUrlParams();
    setProducts(await searchProducts(getUrlParams()));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <Products products={products}/>
      <hr />
      <Footer />
    </>
  );
};

export default SearchProducts;
