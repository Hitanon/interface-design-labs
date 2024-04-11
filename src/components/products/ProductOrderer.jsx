import ProductRatingOrderer from "./ProductRatingOrderer";
import ProductPriceOrderer from "./ProductPriceOrderer";

import "./products.css";


const ProductOrderer = () => {
  return (
    <div className="product-orderer">
      <ProductRatingOrderer />
      <ProductPriceOrderer />
    </div>
  );
};

export default ProductOrderer;
