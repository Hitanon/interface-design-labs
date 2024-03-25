import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import { DELETE_COMMENT_BUTTON_TEXT, EDIT_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";
import { Context } from "../..";
import { ratingValidator } from "../../utils/Validators";


const EditCommentForm = observer(() => {
  const { product } = useContext(Context);

  const { getUserComment, updateComment, deleteComment } = useComments();

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const loadComment = () => {
    const comment = getUserComment();
    setRating(comment.rating);
    setMessage(comment.message);
  };

  const onEditClick = async () => {
    await updateComment(getUserComment().id, rating, message);
  };

  const onDeleteClick = async () => {
    await deleteComment(getUserComment().id);
  };

  useEffect(() => {
    loadComment();
  }, [product.comments]);  // TODO: Fix. Rerender component when product changes

  return (
    <>
      <div>
        <InputField
          type="number"
          placeholder="Rating"
          value={rating}
          callback={setRating}
          validator={ratingValidator}
        />
        <InputField
          type="text"
          placeholder="Message"
          value={message}
          callback={setMessage}
        />
      </div>
      <div>
        <TextButton text={EDIT_COMMENT_BUTTON_TEXT} callback={onEditClick} />
        <TextButton text={DELETE_COMMENT_BUTTON_TEXT} callback={onDeleteClick} />
      </div>
    </>
  );
});

export default EditCommentForm;
