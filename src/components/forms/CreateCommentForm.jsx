import { useState } from "react";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ErrorIcon from "@mui/icons-material/Error";

import TextButton from "../ui/TextButton";
import { CREATE_COMMENT_BUTTON_TEXT } from "../../utils/Consts";

import "./forms.css";

const CreateCommentForm = () => {
  const [hasError, setHasError] = useState(false);
  const onOpen = () => setHasError(true);
  const onClose = () => setHasError(false);

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (rating === 0 || rating === null) {
      onOpen();
    } else {
      console.log("Отправлен комментарий:", {
        rating,
        message,
      });
      // Можно добавить сброс формы, если нужно:
      // setRating(0);
      // setMessage("");
    }
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
      <TextButton
        className="create-comment-button"
        text={CREATE_COMMENT_BUTTON_TEXT}
        callback={handleSubmit}
      />

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
};

export default CreateCommentForm;
