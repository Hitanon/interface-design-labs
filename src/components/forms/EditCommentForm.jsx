import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import ErrorIcon from "@mui/icons-material/Error";

import TextButton from "../ui/TextButton";
import { DELETE_COMMENT_BUTTON_TEXT, EDIT_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";
import { Context } from "../..";
import "./forms.css";

const EditCommentForm = observer(() => {
  const { product } = useContext(Context);
  const { getUserComment, updateComment, deleteComment } = useComments();

  const [rating, setRating] = useState(0);
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [message, setMessage] = useState("");

  const loadComment = () => {
    const comment = getUserComment();
    setRating(comment.rating);
    setMessage(comment.message || "");
  };

  const onEditClick = async () => {
    console.log(rating);
    if (rating === 0 || rating === null) {
      return onOpen();
    }
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

      <Modal
        open={hasError}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ErrorIcon color="error" sx={{ fontSize: 40 }} />
          <p>Пожалуйста, поставьте оценку товару</p>
        </Box>
      </Modal>
    </>
  );
});

export default EditCommentForm;
