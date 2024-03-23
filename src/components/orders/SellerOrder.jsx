import { useContext } from "react";

import { Context } from "../..";
import { getSellerOrder, moveToNextStatus } from "../../clients/SellerClient";

import OrderItem from "./OrderItem";


const SellerOrder = ({ order }) => {
  const { sellerOrders } = useContext(Context);

  const updateOrderStatus = async (orderId) => {
    order = await getSellerOrder(orderId);
    sellerOrders.updateOrder(order);
  };

  const onMoveToNextStatusClick = async (orderId) => {
    await moveToNextStatus(orderId);
    await updateOrderStatus(orderId);
  };

  return (
    <>
      <div>
        Created At: {order.createdAt}
      </div>
      <div>
        Items:
        <ul>
          {order.items.map(
            (item) =>
              <li key={item.id}>
                <OrderItem item={item} />
                <input type="text" />
                <button onClick={() => onMoveToNextStatusClick(order.id)}>
                  Move to next status ({"NEXT STATUS"})
                </button>
              </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SellerOrder;
