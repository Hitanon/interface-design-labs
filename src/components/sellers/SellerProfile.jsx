import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import EditSellerProductForm from "../forms/EditSellerProductForm";
import { getSellerProfile } from "../../clients/SellerClient";

import { Context } from "../..";
import { CREATE_PRODUCT_ROUTE } from "../../utils/Consts";
import TextRedirectButton from "../ui/TextRedirectButton";

import SellerFormInfo from "./SellerFormInfo";
import SellerBalance from "./SellerBalance";


const SellerProfile = observer(() => {
  const [seller, setSeller] = useState({ products: [] });
  const { sellerProfile } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const loadSellerProfile = async () => {
    setIsLoading(true);
    setSeller(await getSellerProfile());
    setIsLoading(false);
  };

  useEffect(() => {
    loadSellerProfile();
  }, []);

  useEffect(() => {
    loadSellerProfile();
  }, [sellerProfile.products]);

  if (isLoading) {
    return;
  }

  return (
    <>
      <SellerFormInfo seller={seller} />
      <hr />
      <SellerBalance seller={seller} />
      <hr />
      <TextRedirectButton text="Добавить продукт" route={CREATE_PRODUCT_ROUTE} />
      <hr />
      {seller.products.map(product => <div key={product.id}><EditSellerProductForm product={product} /></div>)}
    </>
  );
});

export default SellerProfile;
