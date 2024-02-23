import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "..";
import { PRODUCTS_ROUTE } from "../utils/Consts";

import ShortProductInfo from "./ShortProductInfo";


const Products = observer(() => {
  const navigate = useNavigate();

  const { searchProducts } = useContext(Context);

  const onProductClick = async (productId) => {
    navigate(`${PRODUCTS_ROUTE}/${productId}`);
  };

  return (
    <>
      Search Result
      <ul>
        {searchProducts.products.map(
          product =>
            <li key={product.id} onClick={() => onProductClick(product.id)}><ShortProductInfo product={product} /></li>
        )}
      </ul>
    </>
  );
});

export default Products;
