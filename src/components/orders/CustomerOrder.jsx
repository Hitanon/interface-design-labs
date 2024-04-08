import OrderItem from "./OrderItem";

import "./orders.css";

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
    <div className="customer-order">
      <div className="customer-order-title">
        <h2>
          Заказ от {formatCreatedAt()}
        </h2>
        <h2>
          Всего: {order.total} <span>₽</span>
        </h2>
      </div>
      {order.items.map(item => <div key={item.id}><OrderItem item={item} /></div>)}
      <hr className="order-sep"/>
    </div>
  );
};

export default CustomerOrder;
