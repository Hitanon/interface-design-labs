import ImageField from "../ui/ImageField";
import ImageSlider from "../ui/ImageSlider";

import "./products.css";

const ProductInfo = ({ product, withSlider = false, onClick = () => {} }) => {
  return (
    <div
      className="product-item"
      tabIndex={0}
      role="button"
      onClick={() => onClick(product.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick(product.id);
        }
      }}
    >
      <>
        {withSlider ? (
          <ImageSlider urls={product.images} />
        ) : (
          <ImageField
            url={product.images[0]}
            alt={product.name}
            className="product-image-field"
          />
        )}
      </>

      <h2 className="product-price">
        {product.price} <span>₽</span>
      </h2>

      <div className="product-name-rating">
        <h3 className="product-name">{product.name}</h3>
        {product.rating > 0 && (
          <div className="rating">
            <div className="rating-icon"></div>
            {product.rating}
          </div>
        )}
      </div>

      <div>Осталось {product.unitsInStock} шт.</div>
    </div>
  );
};

export default ProductInfo;
