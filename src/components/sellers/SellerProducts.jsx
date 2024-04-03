import { useContext } from "react";

import { Context } from "../..";
import { CREATE_PRODUCT_ROUTE } from "../../utils/Consts";
import EditSellerProductForm from "../forms/EditSellerProductForm";
import TextRedirectButton from "../ui/TextRedirectButton";
import { observer } from "mobx-react-lite";


const SellerProducts = observer(() => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      <TextRedirectButton text="Добавить продукт" route={CREATE_PRODUCT_ROUTE} />
      <hr />
      {sellerProfile.products.map(product => <div key={product.id}><EditSellerProductForm product={product} /></div>)}
    </>
  );
});

export default SellerProducts;
