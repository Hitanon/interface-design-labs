import { useContext, useEffect } from "react";

import { Context } from "..";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import { searchProductsByParams } from "../clients/ProductClient";
import Products from "../components/Products";


const SearchProducts = () => {
  const { projectInfo, searchProducts } = useContext(Context);

  const searchProductsByParamsLocal = async () => {
    const products = await searchProductsByParams(searchProducts.params);
    searchProducts.setProducts(products);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  useEffect(() => {
    searchProductsByParamsLocal();
    loadProjectInfo();
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
