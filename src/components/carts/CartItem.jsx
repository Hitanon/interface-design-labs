import { useNavigate } from "react-router-dom";

import { PRODUCTS_ROUTE } from "../../utils/Consts";
import AddToCartButton from "../ui/AddToCartButton";
import ProductInfo from "../products/ProductInfo";
import SellerButton from "../sellers/SellerButton";


const CartItem = ({ item, className }) => {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.id}`);
  };

  return (
    <div className={className}>
      <ProductInfo product={item} onClick={onProductClick} />
      <SellerButton seller={item.seller} />
      <AddToCartButton item={item} moveToCartButton={false} />
    </div>
  );
};

export default CartItem;
