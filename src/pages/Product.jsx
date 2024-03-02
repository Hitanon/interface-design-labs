import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import FullProductInfo from "../components/FullProductInfo";
import Header from "../components/Header";
import { Context } from "..";
import { getProduct } from "../clients/ProductClient";


const Product = () => {
  const { product } = useContext(Context);
  const { id } = useParams();

  const loadFullProductInfo = async () => {
    const fullProductInfo = await getProduct(id);
    product.setProduct(fullProductInfo);
  };

  useEffect(() => {
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
