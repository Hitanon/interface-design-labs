import { useNavigate, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import { getProduct } from "../../clients/ProductClient";
import ImageSlider from "../ui/ImageSlider";
import AddToCartButton from "../ui/AddToCartButton";

import "./products.css";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${product.id}`);
  };

  return (
    <>
      <div className="product-item" onClick={onProductClick}>
        <div>
          <ImageSlider />
        </div>

        <h2 className="product-price">
          {product.price} <span>₽</span>
        </h2>

        <div className="product-name-rating">
          <h3 className="product-name">
            {product.name}
          </h3>
          <div className="rating">
            <div className="rating-icon"></div>
            {product.rating}
          </div>
        </div>

        <div>
          Осталось {product.unitsInStock} шт.
        </div>
      </div>

      <Link className="product-seller" to={`${SELLERS_ROUTE}/${product.seller?.id}`}>
        <div className="seller-icon"></div>
        {product.seller?.name}
      </Link>

      <AddToCartButton id={id} />
    </>
  );
};

export default ProductCard;
