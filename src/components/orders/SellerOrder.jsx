import { observer } from "mobx-react-lite";
import ImageSlider from "../ui/ImageSlider";

import OrderStatusMovementForm from "./forms/OrderStatusMovementForm";
import { Context } from "../..";
import { useContext } from "react";


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
        <ImageSlider />
      </div>
      <div>
        Название: {order.product.name}
      </div>
      <div>
        Цена: {order.product.price}
      </div>
      <OrderStatusMovementForm order={order} />
    </>
  );
});

export default SellerOrder;
