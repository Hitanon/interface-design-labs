import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import { getProduct } from "../../clients/ProductClient";
import ImageSlider from "../ui/ImageSlider";
import TextRedirectButton from "../ui/TextRedirectButton";
import AddToCartButton from "../ui/AddToCartButton";


const ProductCard = observer(({ id }) => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${id}`);
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

        <div>
          Units in stock: {product.unitsInStock}
        </div>
      </div>

      <div>
        <TextRedirectButton text={`Seller: ${product.seller?.name}`} route={`${SELLERS_ROUTE}/${product.seller?.id}`} />
      </div>

      <AddToCartButton id={id} />
    </>
  );
});

export default ProductCard;
