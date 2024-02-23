import { useContext, useEffect } from "react";

import { Context } from "..";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SellerInfo from "../components/SellerInfo";
import { getProjectInfo } from "../clients/ProjectInfoClient";
import { getSellerInfo } from "../clients/SellerClient";


const Seller = () => {
  const { seller, projectInfo } = useContext(Context);

  const loadSellerInfo = async () => {
    const sellerInfo = await getSellerInfo();
    seller.setInfo(sellerInfo);
  };

  const loadProjectInfo = async () => {
    const info = await getProjectInfo();
    projectInfo.setInfo(info);
  };

  useEffect(() => {
    loadSellerInfo();
    loadProjectInfo();
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
