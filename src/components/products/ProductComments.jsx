import ProductComment from "./ProductComment";


const ProductComments = ({ comments }) => {
  const getCommentsCountText = () => {
    if (comments.length % 10 === 1) {
      return `${comments.length} отзыв о товаре`;
    }
    if (comments.length === 0 || (comments.length > 4 && comments.length < 21)) {
      return `${comments.length} отзывов о товаре`;
    }
    return `${comments.length} отзыва о товаре`;
  };

  return (
    <>
      <div>
        {getCommentsCountText()}
      </div>
      <div>
        {comments.map((comment) => <ProductComment key={comment.id} comment={comment} />)}
      </div>
    </>
  );
};

export default ProductComments;
