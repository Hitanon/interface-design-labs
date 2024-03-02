import { useContext, useEffect } from "react";

import { Context } from "..";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SellerInfo from "../components/SellerInfo";
import { getSellerInfo } from "../clients/SellerClient";


const Seller = () => {
  const { seller } = useContext(Context);

  const loadSellerInfo = async () => {
    const sellerInfo = await getSellerInfo();
    seller.setInfo(sellerInfo);
  };

  useEffect(() => {
    loadSellerInfo();
  }, []);


  return (
    <>
      <Header />
      <hr />
      <SellerInfo />
      <hr />
      <Footer />
    </>
  );
};

export default Seller;
