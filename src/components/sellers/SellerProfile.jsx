import { useEffect, useState } from "react";

import EditSellerProductForm from "../forms/EditSellerProductForm";
import { getSellerProfile } from "../../clients/SellerClient";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";


const SellerProfile = () => {
  const [seller, setSeller] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(false);

  const loadSellerProfile = async () => {
    setIsLoading(true);
    setSeller(await getSellerProfile());
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
      <SellerFormInfo seller={seller} />
      <hr />
      <SellerBalance seller={seller} />
      <hr />
      {seller.products.map(product => <div key={product.id}><EditSellerProductForm product={product} /></div>)}
    </>
  );
};

export default SellerProfile;
