import { useState } from "react";
import { Pagination } from "@mui/material";

import { COMMENTS_PER_PAGE } from "../../utils/Consts";
import ProductComment from "./ProductComment";

import "./products.css";

const ProductComments = () => {
  const [page, setPage] = useState(1);

  const comments = [
    {
      id: 1,
      rating: 5,
      message: "Отличный стол, массив дуба, добротный и устойчивый.",
      user: { id: 10, name: "Иван" },
    },
    {
      id: 2,
      rating: 4,
      message: "Очень нравится, но доставка заняла больше времени, чем ожидал.",
      user: { id: 11, name: "Мария" },
    },
    {
      id: 3,
      rating: 5,
      message: "Идеально вписался в интерьер! Спасибо!",
      user: { id: 12, name: "Алексей" },
    },
    {
      id: 4,
      rating: 3,
      message: "Качество хорошее, но цена высоковата.",
      user: { id: 13, name: "Светлана" },
    },
  ];

  const getCommentsCountText = () => {
    if (comments.length % 10 === 1 && comments.length !== 11) {
      return `${comments.length} отзыв о товаре`;
    }
    if (
      comments.length === 0 ||
      (comments.length > 4 && comments.length < 21)
    ) {
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
    <div className="product-comments">
      <h2>{getCommentsCountText()}</h2>
      <div>
        {getPagedComments().map((comment) => (
          <ProductComment key={comment.id} comment={comment} />
        ))}
      </div>
      {comments.length / COMMENTS_PER_PAGE > 1 && (
        <Pagination
          count={Math.ceil(comments.length / COMMENTS_PER_PAGE)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      )}
    </div>
  );
};

export default ProductComments;
