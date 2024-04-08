import React from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

import "./products.css";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "var(--primary-color)",
  },
});

const ProductComment = ({ comment }) => {
  return (
    <div className="product-comment">
      <div>
        <StyledRating value={comment.rating} readOnly size="small" />
      </div>
      <h3 className="product-comment-message">
        {comment.message}
      </h3>
      <p className="product-comment-author">
        {comment.author}
      </p>
      <hr />
    </div>
  );
};

export default ProductComment;
