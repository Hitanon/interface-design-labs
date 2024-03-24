import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import {
  DECREASE_QUANTITY_BUTTON_TEXT,
  INCREASE_QUANTITY_BUTTON_TEXT,
  PRODUCTS_ROUTE,
  SELLERS_ROUTE,
} from "../../utils/Consts";
import ImageSlider from "../ui/ImageSlider";
import TextRedirectButton from "../ui/TextRedirectButton";
import TextButton from "../ui/TextButton";


const CartItem = ({ item }) => {
  const { get } = useProducts();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { addItem, removeItem, getItemQuantity } = useCart();

  const loadProduct = async () => {
    setProduct(await get(item.id));
  };

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.id}`);
  };

  const onAddToCartClick = async (quantity) => {
    if (product.unitsInStock >= item.quantity + quantity) {
      await addItem(item.id, quantity);
    }
  };

  const onRemoveFromCartClick = async (quantity) => {
    await removeItem(item.id, quantity);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <div onClick={onProductClick}>
        <div>
          <ImageSlider />
        </div>

        <div>
          Name: {product.name}
        </div>

        <div>
          Price: {product.price}
        </div>

        <div>
          Rating: {product.rating}
        </div>

        <div>
          Units in stock: {product.unitsInStock}
        </div>
      </div>

      <div>
        <TextRedirectButton text={`Seller: ${product.seller?.name}`} route={`${SELLERS_ROUTE}/${product.seller?.id}`} />
      </div>

      <div>
        <TextButton text={DECREASE_QUANTITY_BUTTON_TEXT} callback={() => onRemoveFromCartClick(1)} />
        {getItemQuantity(item.id)}
        <TextButton text={INCREASE_QUANTITY_BUTTON_TEXT} callback={() => onAddToCartClick(1)} />
      </div>
    </>
  );
};

export default CartItem;
