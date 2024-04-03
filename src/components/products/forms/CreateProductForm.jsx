import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";
import TextButton from "../../ui/TextButton";
import useSeller from "../../../hooks/useSeller";

import ProductForm from "./ProductForm";


const CreateProductForm = () => {
  const { editProduct } = useContext(Context);
  const { createProduct } = useSeller();
  const navigate = useNavigate();

  const onCreateClick = () => {
    createProduct(
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

  const onDestroy = () => {
    editProduct.clear();
  };

  useEffect(() => {
    return onDestroy;
  }, []);

  return (
    <>
      <ProductForm />
      <TextButton text="Создать" callback={onCreateClick} />
      <TextButton text="Отмена" callback={onCancelClick} />
    </>
  );
};

export default CreateProductForm;
