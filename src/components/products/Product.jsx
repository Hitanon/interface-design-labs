import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import AddToCartButtonFullProduct from "../ui/AddToCartButtonFullProduct";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ImageSlider from "../ui/ImageSlider";

import ProductComments from "./ProductComments";
import ProductDescription from "./ProductDesctiption";


import "./products.css";


const Product = observer(({ id }) => {
  const { product } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const { get } = useProducts();

  const loadProduct = async () => {
    setIsLoading(true);
    product.setProduct(await get(id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="full-product">

      <div className="col1">
        <CategoryButton category={product.category} />
        <ImageSlider urls={product.images} />
        <div className="user-comment-section">
          <p>Вашт отзыв:</p>
          <UserComment itemId={product.id} />
        </div>
        <ProductComments comments={product.comments} />
      </div>

      <div className="col2">

        <h2 className="product-price">
          {product.price} <span>₽</span>
        </h2>

        <h1 className="product-name">
          {product.name}
        </h1>

        <div className="full-rating">
          <div className="rating-icon"></div>
          {product.rating}
        </div>

        <SellerButton seller={product.seller} />

        <AddToCartButtonFullProduct item={product} />

        <div className="product-left">
          Осталось {product.unitsInStock} шт.
        </div>
        <ProductDescription product={product} />

      </div>

    </div>
  );
});

export default Product;
