import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ADMIN_NEW_PRODUCTS_ROUTE,
  ADMIN_USERS_ROUTE,
  ADMIN_SELLERS_ROUTE,
} from "../../utils/Consts";

import "./AdminProfile.css";
import "./colors.css";

const AdminProfile = () => {
  const navigate = useNavigate();
  const adminLogin = "adminUser"; // Статические данные

  return (
    <div className="admin-profile container">
      <h1>Личный кабинет администратора</h1>
      <div className="admin-info">
        <p>
          Логин администратора: <strong>{adminLogin}</strong>
        </p>
      </div>

      <div className="admin-links">
        <button
          className="admin-button"
          onClick={() => navigate(ADMIN_NEW_PRODUCTS_ROUTE)}
        >
          Список новых товаров
        </button>

        <button
          className="admin-button"
          onClick={() => navigate(ADMIN_USERS_ROUTE)}
        >
          Список пользователей
        </button>

        <button
          className="admin-button"
          onClick={() => navigate(ADMIN_SELLERS_ROUTE)}
        >
          Контроль работы продавцов
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
