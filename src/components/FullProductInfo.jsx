import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";

import ProductComments from "./ProductComments";
import ProductImageSlider from "./ProductImageSlider";
import ProductOptions from "./ProductOptions";


const FullProductInfo = observer(() => {
  const { product } = useContext(Context);

  return (
    <>
      <ProductImageSlider />
      <div>
        { product.name }
      </div>
      <div>
        { product.description }
      </div>
      <div>
        { product.price }
      </div>
      <div>
        { product.rating }
      </div>
      <div>
        { product.unitsInStock }
      </div>
      <div>
        { product.category.name }
      </div>
      <div>
        { product.seller.name }
      </div>
      <ProductOptions />
      <ProductComments />
      <div>
        <button>Добавить в корзину</button>
      </div>
    </>
  );
});

export default FullProductInfo;
