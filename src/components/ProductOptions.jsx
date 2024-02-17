import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";

import ProductOption from "./ProductOption";


const ProductOptions = observer(() => {
  const { product } = useContext(Context);

  return (
    <>
      <div>
        ProductOptions
        {
          product.options.map((option) => <div key={option.id}><ProductOption option={option} /></div>)
        }
      </div>
    </>
  );
});

export default ProductOptions;
