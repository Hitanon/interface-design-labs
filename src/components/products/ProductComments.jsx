import { useContext, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { observer } from "mobx-react-lite";

import { COMMENTS_PER_PAGE } from "../../utils/Consts";
import { Context } from "../..";

import ProductComment from "./ProductComment";


const ProductComments = observer(() => {
  const { product } = useContext(Context);
  const [page, setPage] = useState(1);

  const getCommentsCountText = () => {
    const comments = product.comments;
    if (comments.length % 10 === 1) {
      return `${comments.length} отзыв о товаре`;
    }
    if (comments.length === 0 || (comments.length > 4 && comments.length < 21)) {
      return `${comments.length} отзывов о товаре`;
    }
    return `${comments.length} отзыва о товаре`;
  };

  const getPagedComments = () => {
    const startIndex = (page - 1) * COMMENTS_PER_PAGE;
    const endIndex = startIndex + COMMENTS_PER_PAGE;
    return product.comments.slice(startIndex, endIndex);
  };

  const checkPage = () => {
    const temp = Math.ceil(product.comments.length / COMMENTS_PER_PAGE);
    if (page > temp) {
      setPage(temp);
    }
  };

  useEffect(() => {
    checkPage();
  }, [product.comments]);

  return (
    <>
      <div>
        {getCommentsCountText()}
      </div>
      <div>
        {getPagedComments().map((comment) => <ProductComment key={comment.id} comment={comment} />)}
      </div>
      {
        product.comments.length > 0
          ?
          <Pagination
            count={Math.ceil(product.comments.length / COMMENTS_PER_PAGE)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
          :
          <></>
      }
    </>
  );
});

export default ProductComments;
