const ProductDescription = ({ product }) => {
  return (
    <>
      <div>
        Сведения о товаре
      </div>
      <div>
        {product.description}
      </div>
    </>
  );
};

export default ProductDescription;
