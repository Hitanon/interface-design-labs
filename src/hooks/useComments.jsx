import { useContext } from "react";

import { Context } from "..";
import { createProductComment, updateProductComment } from "../clients/CustomerClient";
import { getProduct } from "../clients/ProductClient";


const useComments = () => {
  const { user, product } = useContext(Context);

  const isUserCommentExists = () => {
    const usernames = product.comments.map(comment => comment.author);
    return usernames.includes(user.username);
  };

  const getUserComment = () => {
    if (isUserCommentExists()) {
      return product.comments.filter(comment => comment.author === user.username)[0];
    }
  };

  const updateProduct = async () => {
    product.setProduct(await getProduct(product.id));
  };

  const updateComment = async (id, rating, message) => {
    await updateProductComment(id, rating, message);
    await updateProduct();
  };

  const createComment = async (rating, message) => {
    await createProductComment(product.id, rating, message);
    await updateProduct();
  };

  return {
    isUserCommentExists,
    getUserComment,
    updateComment,
    createComment,
  };
};

export default useComments;
