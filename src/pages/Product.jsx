import { useParams } from "react-router-dom";

import Footer from "../components/general/Footer";
import FullProductInfo from "../components/products/Product";
import Header from "../components/general/Header";


const Product = () => {

  const {id} = useParams();

  return (
    <>
      <Header />
      <div>{id}</div>
      <FullProductInfo id={0} />
      <Footer />
    </>
  );
};

export default Product;
