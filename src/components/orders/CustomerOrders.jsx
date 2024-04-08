import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import useCustomer from "../../hooks/useCustomer";
import { MAIN_ROUTE } from "../../utils/Consts";
import TextRedirectButton from "../ui/TextRedirectButton";

import CustomerOrder from "./CustomerOrder";

import "./orders.css";


const CustomerOrders = observer(() => {
  const { customerProfile } = useContext(Context);
  const { loadOrders } = useCustomer();

  useEffect(() => {
    loadOrders();
  }, []);

  if (customerProfile.orders.length === 0) {
    return (
      <div className="section-without-items">
        <h2>У вас пока нет заказов. Вы можете их оформить</h2>
        <TextRedirectButton className="to-main-button" text={"На главную"} route={MAIN_ROUTE} />
      </div>
    );
  }

  return (
    <div className="orders-section">
      <h1>Заказы</h1>
      {
        customerProfile.orders.map(order => <div key={order.id}><CustomerOrder order={order} /></div>)
      }
    </div>
  );
});

export default CustomerOrders;
