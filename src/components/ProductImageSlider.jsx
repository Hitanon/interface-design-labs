import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "..";


const ProductImageSlider = observer(() => {
  const { product } = useContext(Context);

  return (
    <>
      <div>
        { product.images.map((url, i) => <div key={url}>{i} - {url}</div>) }
      </div>
    </>
  );
});

export default ProductImageSlider;
