import { useNavigate, Link } from "react-router-dom";

import { PRODUCT_ROUTE, SELLER_ROUTE } from "../../utils/Consts";
import AddToCartButton from "../ui/AddToCartButton";

import ProductInfo from "./ProductInfo";

import "./products.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`${PRODUCT_ROUTE}`);
  };

  return (
    <>
      <ProductInfo product={product} onClick={onProductClick} />

      <Link className="product-seller" to={`${SELLER_ROUTE}`}>
        <div className="seller-icon"></div>
        {product.seller?.name}
      </Link>

      <AddToCartButton />
    </>
  );
};

export default ProductCard;
