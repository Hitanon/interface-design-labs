import "./products.css";

const ProductDescription = ({ product }) => {
  return (
    <div className="product-description">
      <h3>
        Сведения о товаре
      </h3>
      <p>
        {product.description} 
      </p>
    </div>
  );
};

export default ProductDescription;
