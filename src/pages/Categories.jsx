import { useEffect, useState } from "react";

import { getAllCategories } from "../clients/CategoryClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesList from "../components/Categories";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAllCategories());
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <Header />
      <hr />
      <CategoriesList categories={categories} />
      <hr />
      <Footer />
    </>
  );
};

export default Categories;
