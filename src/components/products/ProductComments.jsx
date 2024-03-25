import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { Context } from "../..";

import ProductComment from "./ProductComment";


const ProductComments = observer(() => {
  const { product } = useContext(Context);

  return (
    <>
      <div>
        {product.comments.map((comment) => <div key={comment.id}><ProductComment comment={comment} /></div>)}
      </div>
    </>
  );
});

export default ProductComments;
