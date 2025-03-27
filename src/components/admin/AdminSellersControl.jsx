import React, { useState } from "react";
import "./AdminSellersControl.css";
import { useNavigate } from "react-router-dom";

import { PROFILE_ROUTE } from "../../utils/Consts";
import "./colors.css";

const AdminSellersControl = () => {
  const navigate = useNavigate();
  const [sellers] = useState([
    {
      id: 1,
      login: "seller1",
      salesCount: 25,
      rating: 4.7,
      complaints: 2,
    },
    {
      id: 2,
      login: "seller2",
      salesCount: 10,
      rating: 4.2,
      complaints: 0,
    },
    {
      id: 3,
      login: "oldShop",
      salesCount: 99,
      rating: 4.9,
      complaints: 1,
    },
  ]);

  return (
    <div className="admin-sellers-control container">
      <button
        className="admin-back-button admin-button"
        onClick={() => navigate(PROFILE_ROUTE)}
      >
        ← Назад в профиль администратора
      </button>
      <h1>Контроль работы продавцов</h1>
      <table className="sellers-table">
        <thead>
          <tr>
            <th>Логин</th>
            <th>Кол-во продаж</th>
            <th>Рейтинг</th>
            <th>Жалобы</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((s) => (
            <tr key={s.id}>
              <td>{s.login}</td>
              <td>{s.salesCount}</td>
              <td>{s.rating}</td>
              <td>{s.complaints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSellersControl;
