import { useNavigate } from "react-router-dom";

import {PRODUCTS_ROUTE} from "../../utils/Consts";
import AddToCartButton from "../ui/AddToCartButton";
import ProductInfo from "../products/ProductInfo";
import SellerButton from "../sellers/SellerButton";


const CartItem = ({ item }) => {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.id}`);
  };

  console.log(item.images);

  return (
    <>
      <ProductInfo product={item} onClick={onProductClick} />
      <SellerButton seller={item.seller} />
      <AddToCartButton item={item} />
    </>
  );
};

export default CartItem;
