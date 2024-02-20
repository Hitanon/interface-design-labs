import { useContext } from "react";

import { Context } from "..";

import ProductComment from "./ProductComment";


const ProductComments = () => {
  const { product } = useContext(Context);

  return (
    <>
      <div>
        ProductComments
        { product.comments.map((comment) => <div key={comment.author.id}><ProductComment comment={comment} /></div>) }
      </div>
    </>
  );
};

export default ProductComments;
