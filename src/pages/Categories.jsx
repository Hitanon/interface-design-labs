import { useEffect, useState } from "react";

import { getAllCategories } from "../clients/CategoryClient";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import CategoriesList from "../components/categories/Categories";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAllCategories());
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="page-footer-bottom">
      <Header />
      <div className="categroies-section">
        <h2>Категории</h2>
        <CategoriesList categories={categories} />
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
