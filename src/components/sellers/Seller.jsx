import { useEffect, useState } from "react";

import { getSellerInfo } from "../../clients/SellerClient";
import Products from "../products/Products";

import SellerHeader from "./SellerHeader";


const SellerInfo = ({ id }) => {
  const [seller, setSeller] = useState({products: []});
  const [isLoading, setIsLoading] = useState(false);

  const loadSeller = async () => {
    setIsLoading(true);
    setSeller(await getSellerInfo(id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadSeller();
  }, []);

  if (isLoading) {
    return ;
  }

  return (
    <>
      <SellerHeader seller={seller} />
      <Products products={seller.products} />
    </>
  );
};

export default SellerInfo;
