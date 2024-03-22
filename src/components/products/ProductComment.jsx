const ProductComment = ({ comment }) => {
  return (
    <>
      <div>
        {comment.rating}
      </div>
      <div>
        {comment.message}
      </div>
      <div>
        {comment.author}
      </div>
    </>
  );
};

export default ProductComment;
