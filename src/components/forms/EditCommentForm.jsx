import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import TextButton from "../ui/TextButton";
import { DELETE_COMMENT_BUTTON_TEXT, EDIT_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";
import { Context } from "../..";
import "./forms.css";

const EditCommentForm = observer(() => {
  const { product } = useContext(Context);
  const { getUserComment, updateComment, deleteComment } = useComments();

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const loadComment = () => {
    const comment = getUserComment();
    setRating(comment.rating);
    setMessage(comment.message || "");
  };

  const onEditClick = async () => {
    await updateComment(getUserComment().id, rating, message);
  };

  const onDeleteClick = async () => {
    await deleteComment(getUserComment().id);
  };

  useEffect(() => {
    loadComment();
  }, [product.comments]);

  return (
    <>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{
            "& .MuiRating-iconFilled": {
              color: "var(--primary-color)",
            },
            "& .MuiRating-iconHover": {
              color: "var(--primary-color)",
            },
          }}
        />
      </Box>
      <textarea
        className="user-comment"
        placeholder="Комментарий к отзыву"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="edit-comment-section">
        <TextButton className="edit-comment-button" text={EDIT_COMMENT_BUTTON_TEXT} callback={onEditClick} />
        <TextButton className="delete-comment-button" text={DELETE_COMMENT_BUTTON_TEXT} callback={onDeleteClick} />
      </div>
    </>
  );
});

export default EditCommentForm;
