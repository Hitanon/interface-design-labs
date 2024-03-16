import { useContext } from "react";

import { observer } from "mobx-react-lite";

import { Context } from "..";

import { TOP_PRODUCTS_LABEL } from "../utils/Consts";

import ProductCard from "./product/ProductCard";


const TopProducts = observer(() => {
  const { topItems } = useContext(Context);

  return (
    <>
      <div>
        {TOP_PRODUCTS_LABEL}
      </div>
      {
        topItems.products.map((product) => <div key={product.id}><ProductCard id={product.id}></ProductCard></div>)
      }
    </>
  );
});

export default TopProducts;
