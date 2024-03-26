import { observer } from "mobx-react-lite";

import useComments from "../../hooks/useComments";

import EditCommentForm from "../forms/EditCommentForm";
import CreateCommentForm from "../forms/CreateCommentForm";


const UserComment = observer(() => {
  const { isUserCommentExists } = useComments();

  return (
    <>
      {
        isUserCommentExists()
          ?
          <EditCommentForm />
          :
          <CreateCommentForm />
      }
    </>
  );
});

export default UserComment;
