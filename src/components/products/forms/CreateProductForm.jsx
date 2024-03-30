import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";
import TextButton from "../../ui/TextButton";
import useProducts from "../../../hooks/useProducts";

import ProductForm from "./ProductForm";


const CreateProductForm = observer(() => {
  const { editProduct } = useContext(Context);
  const { create } = useProducts();
  const navigate = useNavigate();

  const onCreateClick = () => {
    create(
      editProduct.name,
      editProduct.description,
      editProduct.price,
      editProduct.unitsInStock,
      editProduct.category,
    );
    navigate(PROFILE_ROUTE);
  };

  const onCancelClick = () => {
    navigate(PROFILE_ROUTE);
  };

  return (
    <>
      <ProductForm />
      <TextButton text="Создать" callback={onCreateClick} />
      <TextButton text="Отмена" callback={onCancelClick} />
    </>
  );
});

export default CreateProductForm;
