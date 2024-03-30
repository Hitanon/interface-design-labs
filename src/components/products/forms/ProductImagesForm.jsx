import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../../..";


const ProductImagesForm = observer(() => {
  const { editProduct } = useContext(Context);

  return (
    <>
    Images {editProduct.price}
    </>
  );
});

export default ProductImagesForm;
