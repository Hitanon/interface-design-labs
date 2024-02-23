import { useContext, useEffect } from "react";

import TopCategories from "../components/TopCategories";

import { getTopCategories } from "../clients/CategoryClient";
import { Context } from "..";
import { DEFAULT_TOP_CATEGORIES_COUNT, DEFAULT_TOP_ITEMS_COUNT } from "../utils/Consts";
import TopProducts from "../components/TopProducts";
import { getTopProducts } from "../clients/ProductClient";
import Footer from "../components/Footer";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import Header from "../components/Header";


const Main = () => {
  const { topItems, projectInfo } = useContext(Context);

  const loadTopCategories = async () => {
    const categories = await getTopCategories(DEFAULT_TOP_CATEGORIES_COUNT);
    topItems.setCategories(categories);
  };

  const loadTopProducts = async () => {
    const products = await getTopProducts(DEFAULT_TOP_ITEMS_COUNT);
    topItems.setProducts(products);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  useEffect(() => {
    loadTopCategories();
    loadTopProducts();
    loadProjectInfo();
  }, []);

  return (
    <>
      <Header />
      <hr/>
      <TopCategories />
      <hr/>
      <TopProducts />
      <hr/>
      <Footer />
    </>
  );
};

export default Main;
