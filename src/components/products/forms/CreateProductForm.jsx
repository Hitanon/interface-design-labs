import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";
import TextButton from "../../ui/TextButton";
import useProducts from "../../../hooks/useProducts";

import ProductInfoForm from "./ProductInfoForm";
import ProductCategoryForm from "./ProductCategoryForm";
import ProductImagesForm from "./ProductImagesForm";


const CreateProductForm = () => {
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
    editProduct.clear();
    navigate(PROFILE_ROUTE);
  };

  return (
    <>
      <ProductImagesForm />
      <ProductInfoForm />
      <ProductCategoryForm />
      <TextButton text="Создать" callback={onCreateClick} />
      <TextButton text="Отмена" callback={onCancelClick} />
    </>
  );
};

export default CreateProductForm;
