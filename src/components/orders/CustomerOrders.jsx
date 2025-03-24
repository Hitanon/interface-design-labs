import { useState } from "react";

import { MAIN_ROUTE } from "../../utils/Consts";
import TextRedirectButton from "../ui/TextRedirectButton";

import CustomerOrder from "./CustomerOrder";

import "./orders.css";

const CustomerOrders = () => {
  const [orders] = useState([
    {
      id: 1,
      createdAt: new Date().toISOString(),
      total: 46250,
      items: [
        {
          id: 101,
          product: {
            id: 1,
            name: "Старый деревянный рабочий стол",
            price: 33500,
            images: ["/img/table.png"],
            seller: { id: 1, name: "Seller1" },
          },
          statuses: [{ name: "SENT", dateFrom: new Date().toISOString() }],
        },
        {
          id: 102,
          product: {
            id: 2,
            name: "Минималистичная книжная полка",
            price: 12750,
            images: ["/img/shelf.png"],
            seller: { id: 2, name: "Seller2" },
          },
          statuses: [{ name: "DELIVERED", dateFrom: new Date().toISOString() }],
        },
      ],
    },
    {
      id: 2,
      createdAt: new Date().toISOString(),
      total: 18900,
      items: [
        {
          id: 103,
          product: {
            id: 3,
            name: "Винтажный кожаный офисный стул",
            price: 18900,
            images: ["/img/chair.png"],
            seller: { id: 3, name: "Seller3" },
          },
          statuses: [{ name: "SENT", dateFrom: new Date().toISOString() }],
        },
      ],
    },
  ]);

  if (orders.length === 0) {
    return (
      <div className="section-without-items">
        <h2>У вас пока нет заказов. Вы можете их оформить</h2>
        <TextRedirectButton
          className="to-main-button"
          text={"На главную"}
          route={MAIN_ROUTE}
        />
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="container orders-section">
        <div className="row">
          <h1 className="col-12">Заказы</h1>
          {orders.map((order) => (
            <div className="col-12 row " key={order.id}>
              <CustomerOrder order={order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
