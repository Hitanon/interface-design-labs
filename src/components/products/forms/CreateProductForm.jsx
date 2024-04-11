import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";

import useSeller from "../../../hooks/useSeller";

import ProductForm from "./ProductForm";

import "./forms.css";


const CreateProductForm = () => {
  const { editProduct } = useContext(Context);
  const { createProduct } = useSeller();
  const navigate = useNavigate();

  const onCreateClick = () => {
    try {
      createProduct(
        editProduct.images,
        editProduct.name,
        editProduct.description,
        editProduct.price,
        editProduct.unitsInStock,
        editProduct.category,
      );
      navigate(PROFILE_ROUTE);
    }
    catch (e) { }
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
      <ProductForm onCreate={onCreateClick} onCancel={onCancelClick} applyText="Создать" />
    </>
  );
};

export default CreateProductForm;
