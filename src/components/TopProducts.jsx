import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { observer } from "mobx-react-lite";

import { Context } from "..";

import { PRODUCTS_ROUTE } from "../utils/Consts";

import ShortProductInfo from "./ShortProductInfo";


const TopProducts = observer(() => {
  const { topItems } = useContext(Context);

  const navigate = useNavigate();

  const onProductClick = (productId) => {
    navigate(`${PRODUCTS_ROUTE}/${productId}`);
  };

  return (
    <>
      TopProducts
      <ul>
        {
          topItems.products.map(
            (product) =>
              <li key={product.id} onClick={() => onProductClick(product.id)}>
                <ShortProductInfo product={product}></ShortProductInfo>
              </li>
          )
        }
      </ul>
    </>
  );
});

export default TopProducts;
