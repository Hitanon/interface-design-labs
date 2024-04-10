import "./products.css";
import ProductRatingOrderer from "./ProductRatingOrderer";
import ProductPriceOrderer from "./ProductPriceOrderer";


const ProductOrderer = () => {
  return (
    <>
      <ProductRatingOrderer />
      <ProductPriceOrderer />
    </>
  );
};

export default ProductOrderer;
