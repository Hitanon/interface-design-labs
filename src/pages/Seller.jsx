import { useParams } from "react-router-dom";

import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
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
