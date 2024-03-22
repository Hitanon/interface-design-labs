import { PRODUCT_ORDERS_OPTIONS } from "../../utils/Consts";

import OrderOption from "./OrderOption";


const ProductsOrderer = () => {
  return (
    <>
      {
        PRODUCT_ORDERS_OPTIONS.map((field) => (
          <div key={field.codename}><OrderOption option={field} /></div>
        ))
      }
    </>
  );
};

export default ProductsOrderer;
