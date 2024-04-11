import { useEffect, useState } from "react";

import SellerOrders from "../orders/SellerOrders";
import useSeller from "../../hooks/useSeller";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";
import SellerProducts from "./SellerProducts";


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
      <div className="seller-header full">
        <SellerFormInfo />
        <SellerBalance />
      </div>
      <SellerProducts />
      <SellerOrders />
    </>
  );
};

export default SellerProfile;
