import { useState } from "react";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import TextButton from "../ui/TextButton";
import { CREATE_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";

import "./forms.css";


const CreateCommentForm = ({ itemId }) => {
  const { createComment } = useComments();

  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const createProductComment = async () => {
    if (rating === 0) {
      return onOpen();
    }
    await createComment(itemId, rating, message);
  };

  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
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
      <TextButton className="create-comment-button" text={CREATE_COMMENT_BUTTON_TEXT} callback={createProductComment} />

      <Modal
        open={hasError}
        onClose={onClose}
      >
        <Box>
          <p>{"Пожалуйста, оцените отзыв"}</p>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCommentForm;
