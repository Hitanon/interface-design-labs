const Product = ({ product }) => {
  return (
    <>
      <div>
        {product.name}
      </div>
      <div>
        {product.price}
      </div>
      <div>
        {product.unitsInStock}
      </div>
      <div>
        {product.seller.name}
      </div>
    </>
  );
};

export default Product;
