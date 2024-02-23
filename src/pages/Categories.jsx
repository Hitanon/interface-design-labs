import { useContext, useEffect, useState } from "react";

import { getAllCategories } from "../clients/CategoryClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesList from "../components/Categories";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import { Context } from "..";


const Categories = () => {
  const { projectInfo } = useContext(Context);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    setCategories(await getAllCategories());
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  useEffect(() => {
    loadCategories();
    loadProjectInfo();
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
