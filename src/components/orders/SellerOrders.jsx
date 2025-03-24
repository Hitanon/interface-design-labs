import { useState } from "react";

import { Pagination } from "@mui/material";

import { ORDERS_PER_PAGE } from "../../utils/Consts";

import SellerOrder from "./SellerOrder";

import "./orders.css";

const SellerOrders = () => {
  const [page, setPage] = useState(1);

  const staticOrders = [
    {
      id: 1,
      createdAt: new Date().toISOString(),
      customer: { id: 1, username: "Иван Петров" },
      product: {
        id: 1,
        name: "Старый деревянный рабочий стол",
        price: 33500,
        images: ["/img/table.png"],
      },
      events: [{ name: "CREATED" }, { name: "ACCEPTED" }, { name: "PACKED" }],
    },
    {
      id: 2,
      createdAt: new Date().toISOString(),
      customer: { id: 2, username: "Анна Смирнова" },
      product: {
        id: 2,
        name: "Минималистичная книжная полка",
        price: 12750,
        images: ["/img/shelf.png"],
      },
      events: [
        { name: "CREATED" },
        { name: "ACCEPTED" },
        { name: "PACKED" },
        { name: "SENT" },
      ],
    },
    {
      id: 3,
      createdAt: new Date().toISOString(),
      customer: { id: 3, username: "Алексей Козлов" },
      product: {
        id: 3,
        name: "Винтажный кожаный офисный стул",
        price: 18900,
        images: ["/img/chair.png"],
      },
      events: [{ name: "CREATED" }],
    },
  ];

  const getPagedOrders = () => {
    const startIndex = (page - 1) * ORDERS_PER_PAGE;
    const endIndex = startIndex + ORDERS_PER_PAGE;
    return staticOrders.slice(startIndex, endIndex);
  };

  return (
    <div className="col-12">
      <h2>Заказы</h2>
      {getPagedOrders().map((order) => (
        <div key={order.id}>
          <SellerOrder order={order} />
        </div>
      ))}

      {staticOrders.length > ORDERS_PER_PAGE && (
        <Pagination
          count={Math.ceil(staticOrders.length / ORDERS_PER_PAGE)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      )}
    </div>
  );
};

export default SellerOrders;
