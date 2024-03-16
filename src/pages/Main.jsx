import { useContext, useEffect } from "react";

import TopCategories from "../components/TopCategories";

import { getTopCategories } from "../clients/CategoryClient";
import { Context } from "..";
import { DEFAULT_TOP_CATEGORIES_COUNT, DEFAULT_TOP_ITEMS_COUNT } from "../utils/Consts";
import TopProducts from "../components/TopProducts";
import { getTopProducts } from "../clients/ProductClient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectGreeting from "../components/ProjectGreeting";


const Main = () => {
  const { topItems } = useContext(Context);

  const loadTopCategories = async () => {
    const categories = await getTopCategories(DEFAULT_TOP_CATEGORIES_COUNT);
    topItems.setCategories(categories);
  };

  const loadTopProducts = async () => {
    const products = await getTopProducts(DEFAULT_TOP_ITEMS_COUNT);
    topItems.setProducts(products);
  };

  useEffect(() => {
    loadTopCategories();
    loadTopProducts();
  }, []);

  return (
    <>
      <Header />
      <hr/>
      <ProjectGreeting />
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
