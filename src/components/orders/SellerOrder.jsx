import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import ImageField from "../ui/ImageField";

import OrderStatusMovementForm from "./forms/OrderStatusMovementForm";


const SellerOrder = observer(({ order }) => {
  const { sellerProfile } = useContext(Context);

  return (
    <>
      <div>
        Заказ от: {order.createdAt}
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
