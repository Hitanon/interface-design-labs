import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";

import ProductCard from "../products/ProductCard";


const SellerProducts = observer(() => {
  const { seller } = useContext(Context);

  return (
    <>
      {
        seller.products.map(product => <div key={product.id}><ProductCard id={product.id} /></div>)
      }
    </>
  );
});

export default SellerProducts;
