import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import ImageField from "../ui/ImageField";

import OrderStatusMovementForm from "./forms/OrderStatusMovementForm";


const SellerOrder = observer(({ order }) => {
  const { sellerProfile } = useContext(Context);

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
    <>
      <div>
        Заказ от: {formatDate()}
      </div>
      <div>
        Заказчик: {order.customer.username}
      </div>
      <div>
        <ImageField url={order.product.images[0]} />
      </div>
      <div>
        Название: {order.product.name}
      </div>
      <div>
        Цена: {order.product.price} ₽
      </div>
      <OrderStatusMovementForm order={order} />
    </>
  );
});

export default SellerOrder;
