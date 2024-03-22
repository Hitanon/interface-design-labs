import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SellerInfo from "../components/sellers/Seller";


const Seller = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <hr />
      <SellerInfo id={id} />
      <hr />
      <Footer />
    </>
  );
};

export default Seller;
