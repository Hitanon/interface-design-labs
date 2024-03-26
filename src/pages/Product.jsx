import { useParams } from "react-router-dom";

import Footer from "../components/general/Footer";
import FullProductInfo from "../components/products/Product";
import Header from "../components/general/Header";


const Product = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <hr />
      <FullProductInfo id={id} />
      <hr />
      <Footer />
    </>
  );
};

export default Product;
