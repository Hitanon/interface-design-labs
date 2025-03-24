import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";

import ProductForm from "./ProductForm";

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editProduct } = useContext(Context); // доступ к MobX store

  const loadProduct = () => {
    const mockProduct = {
      id: id,
      name: "Пример товара",
      description: "Описание примера товара",
      price: 9999,
      unitsInStock: 5,
      category: 1,
      images: ["/img/table.png"],
    };
    editProduct.setProduct({ ...mockProduct, images: [] }); // инициализация глобального состояния
  };

  const onSaveClick = () => {
    alert("Товар успешно сохранён (макет)");
    navigate(PROFILE_ROUTE);
  };

  const onCancelClick = () => {
    alert("Изменения отменены");
    navigate(PROFILE_ROUTE);
  };

  useEffect(() => {
    loadProduct();
    return () => {
      editProduct.clear();
    };
  }, []);

  return (
    <div className="container-fluid page-footer-bottom">
      <div className="container">
        <ProductForm
          onCreate={onSaveClick}
          onCancel={onCancelClick}
          applyText="Сохранить"
        />
      </div>
    </div>
  );
};

export default EditProductForm;
