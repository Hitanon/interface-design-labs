import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";
import useCustomer from "../../hooks/useCustomer";
import { MAIN_ROUTE } from "../../utils/Consts";
import TextRedirectButton from "../ui/TextRedirectButton";

import CustomerOrder from "./CustomerOrder";


const CustomerOrders = observer(() => {
  const { customerProfile } = useContext(Context);
  const { loadOrders } = useCustomer();

  useEffect(() => {
    loadOrders();
  }, []);

  if (customerProfile.orders.length === 0) {
    return (
      <>
        <div>У вас пока нет заказов. Вы можете их оформить</div>
        <TextRedirectButton text={"На главную"} route={MAIN_ROUTE} />
      </>
    );
  }

  return (
    <>
      {
        customerProfile.orders.map(order => <div key={order.id}><CustomerOrder order={order} /></div>)
      }
    </>
  );
});

export default CustomerOrders;
