import { observer } from "mobx-react-lite";
import { useContext } from "react";

import useComments from "../../hooks/useComments";

import EditCommentForm from "../forms/EditCommentForm";
import CreateCommentForm from "../forms/CreateCommentForm";
import { Context } from "../..";
import { ROLE } from "../../utils/Consts";


const UserComment = observer(({ itemId }) => {
  const { user } = useContext(Context);
  const { isUserCommentExists } = useComments();

  if (user.role !== ROLE.CUSTOMER) {
    return;
  }

  if (isUserCommentExists()) {
    return (
      <>
        <EditCommentForm />
      </>
    );
  }

  return (
    <>
      <CreateCommentForm itemId={itemId} />
    </>
  );
});

export default UserComment;
