// AdminUsersList.jsx
import React, { useState } from "react";
import "./AdminUsersList.css";
import { useNavigate } from "react-router-dom";

import { PROFILE_ROUTE } from "../../utils/Consts";
import "./colors.css";

const AdminUsersList = () => {
  const navigate = useNavigate();
  // Статические данные
  const [activeUsers, setActiveUsers] = useState([
    { id: 1, login: "ivan", name: "Иван Петров", role: "customer" },
    { id: 2, login: "sellerX", name: "Продавец X", role: "seller" },
    { id: 3, login: "manager", name: "Менеджер Ольга", role: "admin" },
  ]);

  const [bannedUsers, setBannedUsers] = useState([
    { id: 4, login: "troll", name: "Тролль", role: "customer" },
  ]);

  const banUser = (userId) => {
    const user = activeUsers.find((u) => u.id === userId);
    if (!user) return;
    // Переносим пользователя в bannedUsers
    setActiveUsers(activeUsers.filter((u) => u.id !== userId));
    setBannedUsers([...bannedUsers, user]);
  };

  const unbanUser = (userId) => {
    const user = bannedUsers.find((u) => u.id === userId);
    if (!user) return;
    // Переносим пользователя в activeUsers
    setBannedUsers(bannedUsers.filter((u) => u.id !== userId));
    setActiveUsers([...activeUsers, user]);
  };

  return (
    <div className="admin-users-list container">
      <button
        className="admin-back-button"
        onClick={() => navigate(PROFILE_ROUTE)}
      >
        ← Назад в профиль администратора
      </button>
      <h1>Список пользователей</h1>

      <section>
        <h2>Активные пользователи</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Логин</th>
              <th>Имя</th>
              <th>Роль</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button className="ban-btn" onClick={() => banUser(user.id)}>
                    Забанить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Забаненные пользователи</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Логин</th>
              <th>Имя</th>
              <th>Роль</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {bannedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.login}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="unban-btn"
                    onClick={() => unbanUser(user.id)}
                  >
                    Разбанить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminUsersList;
