import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { getProductOrder, submitAcceptOrderItem } from "../../clients/CustomerClient";
import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";

import ImageSlider from "../ui/ImageSlider";
import TextButton from "../ui/TextButton";

import OrderStatus from "./OrderStatus";


const OrderItem = observer(({ item }) => {
  const navigate = useNavigate();
  const [orderItem, setOrderItem] = useState(item);

  const onSellerClick = () => {
    navigate(`${SELLERS_ROUTE}/${item.product.seller.id}`);
  };

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.product.id}`);
  };

  const isDelivered = () => {
    return item.statuses[0].name === "DELIVERED";
  };

  const onSubmitAcceptClick = async () => {
    await submitAcceptOrderItem(orderItem.id);
    setOrderItem(await getProductOrder(orderItem.id));
  };

  return (
    <>
      <div onClick={onProductClick}>
        <div>
          <div>
            Name: {orderItem.product.name}
          </div>
          <ImageSlider />
          <div>
            Price: {orderItem.product.price}
          </div>
        </div>
        <div onClick={onSellerClick}>
          Seller: {orderItem.product.seller.name}
        </div>
        <div>
          Statuses:
          <div>
            {
              orderItem.statuses.map(status => <div key={status.id}><OrderStatus status={status} /></div>)
            }
          </div>
        </div>
      </div>
      {isDelivered() ? <TextButton text={"Подтвердить получение"} callback={onSubmitAcceptClick} /> : null}
    </>
  );
});

export default OrderItem;
