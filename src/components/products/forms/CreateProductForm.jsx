import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { PROFILE_ROUTE } from "../../../utils/Consts";

import ProductForm from "./ProductForm";

import "./forms.css";

const CreateProductForm = () => {
  const navigate = useNavigate();

  const onCreateClick = () => {
    alert("Товар успешно создан");
    navigate(PROFILE_ROUTE);
  };

  const onCancelClick = () => {
    navigate(PROFILE_ROUTE);
  };

  // Эффект очистки можно опустить, если нет глобального состояния
  useEffect(() => {
    return () => {
      // Очистка временных данных (если нужно)
      console.log("Очищены временные данные редактирования");
    };
  }, []);

  return (
    <div className="container-fluid page-footer-bottom">
      <div className="container">
        <ProductForm
          onCreate={onCreateClick}
          onCancel={onCancelClick}
          applyText="Создать"
        />
      </div>
    </div>
  );
};

export default CreateProductForm;
