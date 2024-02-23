import OrderStatuses from "./OrderStatuses";


const OrderItem = ({ item }) => {
  return (
    <>
      <div>
        <div>
          Name: {item.id}
        </div>
        <OrderStatuses statuses={item.statuses} />
      </div>
    </>
  );
};

export default OrderItem;
