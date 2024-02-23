import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "..";
import { PRODUCTS_ROUTE } from "../utils/Consts";

import ShortProductInfo from "./ShortProductInfo";


const SellerProducts = observer(() => {
  const navigate = useNavigate();

  const { seller } = useContext(Context);

  const onProductClick = async (productId) => {
    navigate(`${PRODUCTS_ROUTE}/${productId}`);
  };

  return (
    <>
      Products
      <ul>
        {seller.products.map(
          product =>
            <li key={product.id} onClick={() => onProductClick(product.id)}><ShortProductInfo product={product} /></li>
        )}
      </ul>
    </>
  );
});

export default SellerProducts;
