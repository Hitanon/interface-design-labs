import { useEffect, useState } from "react";

import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import { EDIT_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";


const EditCommentForm = () => {
  const {getUserComment, updateComment} = useComments();

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const loadComment = () => {
    const comment = getUserComment();
    setRating(comment.rating);
    setMessage(comment.message);
  };

  useEffect(() => {
    loadComment();
  }, []);

  return (
    <>
      <div>
        <InputField type="number" placeholder="Rating" value={rating} callback={setRating} />
        <InputField type="text" placeholder="Message" value={message} callback={setMessage} />
      </div>
      <div>
        <TextButton text={EDIT_COMMENT_BUTTON_TEXT} callback={updateComment} />
      </div>
    </>
  );
};

export default EditCommentForm;
