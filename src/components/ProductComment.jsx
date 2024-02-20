const ProductComment = ({ comment }) => {
  return (
    <>
      <div>
        {comment.rating}
      </div>
      <div>
        {comment.text}
      </div>
      <div>
        {comment.author.name}
      </div>
    </>
  );
};

export default ProductComment;
