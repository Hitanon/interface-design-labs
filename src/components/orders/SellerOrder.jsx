import ImageSlider from "../ui/ImageSlider";

import OrderStatusMovementForm from "./forms/OrderStatusMovementForm";


const SellerOrder = ({ order }) => {
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
};

export default SellerOrder;
