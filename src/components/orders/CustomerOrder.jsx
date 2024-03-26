import OrderItem from "./OrderItem";


const CustomerOrder = ({ order }) => {
  return (
    <>
      <div>
        Заказ от: {order.createdAt}
      </div>
      <div>
        Всего: {order.total}
      </div>
      {order.items.map(item => <div key={item.id}><OrderItem item={item} /></div>)}
    </>
  );
};

export default CustomerOrder;
