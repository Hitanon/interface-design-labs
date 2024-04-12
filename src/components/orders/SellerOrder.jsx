import { observer } from "mobx-react-lite";

import ImageField from "../ui/ImageField";

import OrderStatusMovementForm from "./forms/OrderStatusMovementForm";

import "./orders.css";


const SellerOrder = observer(({ order }) => {

  const formatDate = () => {
    const date = new Date(order.createdAt);
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = date.getMonth();
    if (month < 10) {
      month = `0${month + 1}`;
    }
    return `${day}.${month}.${date.getFullYear()}`;
  };

  return (
    <div className="seller-order">
      <h3 className="seller-order-title">
        Заказ от: {formatDate()}
      </h3>
      <p>
        Заказчик: {order.customer.username}
      </p>
      <div className="seller-order-container">
        <div className="seller-order-info">
          <ImageField className="product-image-field" url={order.product.images[0]} />
          <div className="seller-order-product-info">
            <h3 className="product-name-full">
              {order.product.name}
            </h3>
            <h2 className="product-price seller">
              {order.product.price} <span>₽</span>
            </h2>
          </div>
        </div>

        <div className="seller-order-status">
          <OrderStatusMovementForm order={order} />
        </div>

      </div>
      <hr className="seller-order-sep" />
    </div>
  );
});

export default SellerOrder;
