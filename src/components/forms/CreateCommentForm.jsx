import { useState } from "react";

import InputField from "../ui/InputField";
import TextButton from "../ui/TextButton";
import { CREATE_COMMENT_BUTTON_TEXT } from "../../utils/Consts";
import useComments from "../../hooks/useComments";
import { ratingValidator } from "../../utils/Validators";


const CreateCommentForm = ({ itemId }) => {
  const { createComment } = useComments();

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const createProductComment = async () => {
    await createComment(itemId, rating, message);
  };

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
        <InputField type="text" placeholder="Message" value={message} callback={setMessage} />
      </div>
      <div>
        <TextButton text={CREATE_COMMENT_BUTTON_TEXT} callback={createProductComment} />
      </div>
    </>
  );
};

export default CreateCommentForm;
