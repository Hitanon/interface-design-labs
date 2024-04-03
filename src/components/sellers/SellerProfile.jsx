import { useContext, useEffect, useState } from "react";

import { getSellerProfile } from "../../clients/SellerClient";

import { Context } from "../..";
import SellerOrders from "../orders/SellerOrders";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";
import SellerProducts from "./SellerProducts";
import useSeller from "../../hooks/useSeller";


const SellerProfile = () => {
  const { loadProfile } = useSeller();
  const [isLoading, setIsLoading] = useState(false);

  const loadSellerProfile = async () => {
    setIsLoading(true);
    await loadProfile();
    setIsLoading(false);
  };

  useEffect(() => {
    loadSellerProfile();
  }, []);

  if (isLoading) {
    return;
  }

  return (
    <>
      <SellerFormInfo />
      <hr />
      <SellerBalance />
      <hr />
      <SellerProducts />
      <hr />
      <SellerOrders />
    </>
  );
};

export default SellerProfile;
