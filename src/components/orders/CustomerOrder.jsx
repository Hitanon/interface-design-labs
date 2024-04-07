import OrderItem from "./OrderItem";


const CustomerOrder = ({ order }) => {
  const formatCreatedAt = () => {
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
        Заказ от: {formatCreatedAt()}
      </div>
      <div>
        Всего: {order.total} ₽
      </div>
      {order.items.map(item => <div key={item.id}><OrderItem item={item} /></div>)}
    </>
  );
};

export default CustomerOrder;
