import { useEffect, useState } from "react";

import { getSellerInfo } from "../../clients/SellerClient";
import Products from "../products/Products";

import SellerHeader from "./SellerHeader";


const SellerInfo = ({ id }) => {
  const [seller, setSeller] = useState({ products: [] });
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
    return;
  }

  return (
    <>
      <SellerHeader seller={seller} />
      <div className="seller-product-container">
        <h2 className="seller-products-title">Товары</h2>
        <Products products={seller.products} />
      </div>

    </>
  );
};

export default SellerInfo;
