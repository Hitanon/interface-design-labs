import OrderItem from "./OrderItem";


const CustomerOrder = ({ order }) => {
  return (
    <>
      <div>
        Created At: {order.createdAt}
      </div>
      <div>
        Items:
        <ul>
          {order.items.map(item => <li key={item.id}><OrderItem item={item} /></li>)}
        </ul>
      </div>
    </>
  );
};

export default CustomerOrder;
