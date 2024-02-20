import { useContext } from "react";

import { observer } from "mobx-react-lite";

import { Context } from "..";

import ShortProductInfo from "./ShortProductInfo";

const TopProducts = observer(() => {
  const { topItems } = useContext(Context);

  return (
    <>
      TopProducts
      <ul>
        {
          topItems.products.map(
            (product) => <li key={product.id}><ShortProductInfo product={product}></ShortProductInfo></li>
          )
        }
      </ul>
    </>
  );
});

export default TopProducts;
