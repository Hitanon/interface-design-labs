import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import FullProductInfo from "../components/FullProductInfo";
import Header from "../components/Header";
import { Context } from "..";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import { getProduct } from "../clients/ProductClient";


const Product = () => {
  const { projectInfo, product } = useContext(Context);
  const { id } = useParams();

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  const loadFullProductInfo = async () => {
    const fullProductInfo = await getProduct(id);
    product.setProduct(fullProductInfo);
  };

  useEffect(() => {
    loadProjectInfo();
    loadFullProductInfo();
  }, []);

  return (
    <>
      <Header />
      <hr/>
      <FullProductInfo />
      <hr/>
      <Footer />
    </>
  );
};

export default Product;
