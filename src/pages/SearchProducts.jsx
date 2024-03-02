import { useContext, useEffect } from "react";

import { Context } from "..";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { searchProductsByParams } from "../clients/ProductClient";
import Products from "../components/Products";


const SearchProducts = () => {
  const { searchProducts } = useContext(Context);

  const searchProductsByParamsLocal = async () => {
    const products = await searchProductsByParams(searchProducts.params);
    searchProducts.setProducts(products);
  };

  useEffect(() => {
    searchProductsByParamsLocal();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <Products />
      <hr />
      <Footer />
    </>
  );
};

export default SearchProducts;
