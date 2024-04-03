import ImageSlider from "../ui/ImageSlider";


const ProductInfo = ({ product, onClick = () => { } }) => {
  return (
    <div className="product-item" onClick={() => onClick(product.id)}>
      <div>
        <ImageSlider />
      </div>

      <h2 className="product-price">
        {product.price} <span>₽</span>
      </h2>

      <div className="product-name-rating">
        <h3 className="product-name">
          {product.name}
        </h3>
        <div className="rating">
          <div className="rating-icon"></div>
          {product.rating}
        </div>
      </div>

      <div>
        Осталось {product.unitsInStock} шт.
      </div>
    </div>
  );
};

export default ProductInfo;
