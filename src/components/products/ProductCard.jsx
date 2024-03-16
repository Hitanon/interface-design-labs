import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { ADD_TO_CART_BUTTON_TEXT, PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import { getProduct } from "../../clients/ProductClient";
import ImageSlider from "../ui/ImageSlider";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";
import useCart from "../../hooks/useCart";


const ProductCard = observer(({ id }) => {
  const [product, setProduct] = useState({});
  const { addItem } = useCart();
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${id}`);
  };

  const onAddToCartClick = async () => {
    await addItem(id, 1);
  };

  const loadProduct = async () => {
    setProduct(await getProduct(id));
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
      </div>

      <div>
        <TextRedirectButton text={`Seller: ${product.seller?.name}`} route={`${SELLERS_ROUTE}/${product.seller?.id}`} />
      </div>

      <div>
        <TextButton text={ADD_TO_CART_BUTTON_TEXT} callback={onAddToCartClick} />
      </div>
    </>
  );
});

export default ProductCard;
