import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import TextButton from "../ui/TextButton";
import ImageField from "../ui/ImageField";

import OrderStatuses from "./OrderStatuses";

import "./orders.css";

const OrderItem = ({ item }) => {
  const navigate = useNavigate();

  const [statuses, setStatuses] = useState(item.statuses);

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.product.id}`);
  };

  const isAcceptable = () => {
    return statuses[0].name === "SENT";
  };

  const onSubmitAcceptClick = () => {
    const newStatus = {
      name: "DELIVERED",
      dateFrom: new Date().toISOString(),
      details: "Покупатель подтвердил получение",
    };
    setStatuses([newStatus, ...statuses]);
  };

  return (
    <div className="customer-order-item">
      <div className="row gy-4">
        <div className="col-12 col-md-6 col-lg-5">
          <h3 className="order-title" onClick={onProductClick}>
            <ImageField
              className="order-full-image"
              url={item.product.images[0]}
            />
            {item.product.name}
          </h3>
          <Link
            className="order-seller"
            to={`${SELLERS_ROUTE}/${item.product.seller.id}`}
          >
            <div className="seller-icon"></div>
            {item.product.seller.name}
          </Link>
          <h2>
            {item.product.price} <span>₽</span>
          </h2>
        </div>

        <div className="col-12 col-md-6 col-lg-5 offset-lg-2 col-xl-3 offset-xl-4 order-status">
          <OrderStatuses statuses={statuses} />
          {isAcceptable() && (
            <TextButton
              className="order-status-accept-button"
              text={"Подтвердить получение"}
              callback={onSubmitAcceptClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
