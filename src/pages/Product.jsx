import { useParams } from "react-router-dom";

import Footer from "../components/general/Footer";
import FullProductInfo from "../components/products/Product";
import Header from "../components/general/Header";


const Product = () => {

  return (
    <>
      <Header />
      <FullProductInfo id={0} />
      <Footer />
    </>
  );
};

export default Product;
