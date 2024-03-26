import { observer } from "mobx-react-lite";

import SellerOrders from "../orders/SellerOrders";

import SellerBalance from "./SellerBalance";

import SellerFormInfo from "./SellerFormInfo";
import { Context } from "../..";
import { useContext, useEffect, useState } from "react";
import EditSellerProductForm from "../forms/EditSellerProductForm";
import { getSellerProfile } from "../../clients/SellerClient";


const SellerProfile = observer(() => {
  const { user } = useContext(Context);
  const [seller, setSeller] = useState({products: []});
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
    return ;
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
});

export default SellerProfile;
