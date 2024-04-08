import { useNavigate, Link } from "react-router-dom";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import useCustomer from "../../hooks/useCustomer";

import TextButton from "../ui/TextButton";
import ImageField from "../ui/ImageField";

import OrderStatuses from "./OrderStatuses";

import "./orders.css";


const OrderItem = ({ item }) => {
  const navigate = useNavigate();
  const { acceptOrderItem } = useCustomer();

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.product.id}`);
  };

  const isAcceptable = () => {
    return item.statuses[0].name === "SENT";
  };

  const onSubmitAcceptClick = async () => {
    acceptOrderItem(item.id);
  };

  return (
    <div className="customer-order-item">

      <div className="order-card">
        <div onClick={onProductClick} >
          <ImageField className="order-image" url={item.product.images[0]} />
        </div>
        <div className="order-info">
          <h3 className="order-title" onClick={onProductClick}>
            {item.product.name}
          </h3>
          <Link className="order-seller" to={`${SELLERS_ROUTE}/${item.product.seller.id}`}>
            <div className="seller-icon"></div>
            {item.product.seller.name}
          </Link>
          <h2>
            {item.product.price} <span>₽</span>
          </h2>
        </div>
      </div>

      <div className="order-status">
        <OrderStatuses statuses={item.statuses} />
        {isAcceptable() ? <TextButton
          className="order-status-accept-button"
          text={"Подтвердить получение"}
          callback={onSubmitAcceptClick} /> : null}
      </div>

    </div>
  );
};

export default OrderItem;
