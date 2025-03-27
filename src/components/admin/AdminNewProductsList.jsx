import React from "react";
import "./AdminNewProductsList.css";
import { useNavigate } from "react-router-dom";

import {
  PROFILE_ROUTE,
  ADMIN_NEW_PRODUCT_VIEW_ROUTE,
} from "../../utils/Consts";
import "./colors.css";

const AdminNewProductsList = () => {
  const navigate = useNavigate();
  const newProducts = [
    { id: 101, name: "Новый стол", category: "Мебель", seller: "Seller1" },
    {
      id: 102,
      name: "Кресло для офиса",
      category: "Мебель",
      seller: "Seller2",
    },
    {
      id: 103,
      name: "Подсвечник ручной работы",
      category: "Аксессуары",
      seller: "Seller3",
    },
  ];

  const onViewProduct = (productId) => {
    navigate(ADMIN_NEW_PRODUCT_VIEW_ROUTE);
  };

  return (
      <div className="admin-new-products container">
        <button
          className="admin-back-button admin-button"
          onClick={() => navigate(PROFILE_ROUTE)}
        >
          ← Назад в профиль администратора
        </button>
        <h1>Список новых товаров</h1>
        <table className="new-products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Категория</th>
              <th>Продавец</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {newProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.seller}</td>
                <td>
                  <button className="admin-button" onClick={() => onViewProduct(p.id)}>Просмотр</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default AdminNewProductsList;
