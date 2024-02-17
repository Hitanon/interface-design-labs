import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Product from "./Product";

const TopProducts = observer(() => {
  const { topItems } = useContext(Context);

  return (
    <>
      TopProducts
      <ul>
        {
          topItems.products.map((product) => <li key={product.id}><Product product={product}></Product></li>)
        }
      </ul>
    </>
  );
});

export default TopProducts;
