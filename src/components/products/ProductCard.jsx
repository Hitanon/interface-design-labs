import { useNavigate, Link } from "react-router-dom";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import AddToCartButton from "../ui/AddToCartButton";

import ProductInfo from "./ProductInfo";

import "./products.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`${PRODUCTS_ROUTE}/${id}`);
  };

  return (
    <>
      <ProductInfo product={product} onClick={onProductClick} />

      <Link className="product-seller" to={`${SELLERS_ROUTE}/${product.seller?.id}`}>
        <div className="seller-icon"></div>
        {product.seller?.name}
      </Link>

      <AddToCartButton item={product} />
    </>
  );
};

export default ProductCard;
