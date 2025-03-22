// AdminNewProductView.jsx
import React, { useState } from "react";
import "./AdminNewProductView.css";
import { useNavigate } from "react-router-dom";

import { ADMIN_NEW_PRODUCTS_ROUTE } from "../../utils/Consts";

const AdminNewProductView = () => {
  const navigate = useNavigate();
  // Статическая инфа о товаре
  const [product] = useState({
    id: 101,
    name: "Новый стол из дуба",
    description: "Описание: прочный стол, ручная работа, массив дуба...",
    price: 15999,
    images: ["/img/table.png"],
    seller: "Seller1",
  });

  const [rejectReason, setRejectReason] = useState("");

  const onApprove = () => {
    alert("Товар одобрен к публикации");
    navigate(ADMIN_NEW_PRODUCTS_ROUTE);
  };

  const onReject = () => {
    alert(`Товар отклонён. Причина: ${rejectReason}`);
    navigate(ADMIN_NEW_PRODUCTS_ROUTE);
  };

  return (
    <div className="admin-new-product-view container">
      <h1>Просмотр нового товара</h1>
      <div className="product-info">
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Название:</strong> {product.name}
        </p>
        <p>
          <strong>Описание:</strong> {product.description}
        </p>
        <p>
          <strong>Цена:</strong> {product.price} ₽
        </p>
        <p>
          <strong>Продавец:</strong> {product.seller}
        </p>
        <p>
          <strong>Изображения:</strong> {product.images.join(", ")}
        </p>
      </div>
      <div className="product-actions">
        <button className="approve" onClick={onApprove}>
          Одобрить
        </button>
        <div className="reject-section">
          <textarea
            placeholder="Причина отклонения"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          />
          <button className="reject" onClick={onReject}>
            Отклонить
          </button>
          <button
            className="admin-back-button"
            onClick={() => navigate(ADMIN_NEW_PRODUCTS_ROUTE)}
          >
            ← Назад к списку товаров
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNewProductView;
