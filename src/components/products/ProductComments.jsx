import { useState } from "react";
import { Pagination } from "@mui/material";

import { COMMENTS_PER_PAGE } from "../../utils/Consts";

import ProductComment from "./ProductComment";


const ProductComments = ({ comments }) => {
  const [page, setPage] = useState(1);

  const getCommentsCountText = () => {
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
    return comments.slice(startIndex, endIndex);
  };

  return (
    <>
      <div>
        {getCommentsCountText()}
      </div>
      <div>
        {getPagedComments().map((comment) => <ProductComment key={comment.id} comment={comment} />)}
      </div>
      {
        comments.length > 0
          ?
          <Pagination
            count={Math.ceil(comments.length / COMMENTS_PER_PAGE)}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
          :
          <></>
      }
    </>
  );
};

export default ProductComments;
