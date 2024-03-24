import { observer } from "mobx-react-lite";

import OrderItem from "./OrderItem";


const CustomerOrder = observer(({ order }) => {
  return (
    <>
      <div>
        Заказ от: {order.createdAt}
      </div>
      <div>
        Всего: {order.total}
      </div>
      <div>
        Items:
        <div>
          {order.items.map(item => <div key={item.id}><OrderItem item={item} /></div>)}
        </div>
      </div>
    </>
  );
});

export default CustomerOrder;
