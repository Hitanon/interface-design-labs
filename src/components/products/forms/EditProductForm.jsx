import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";
import TextButton from "../../ui/TextButton";
import useProducts from "../../../hooks/useProducts";

import ProductForm from "./ProductForm";


const EditProductForm = observer(() => {
  const { get, update } = useProducts();
  const [product, setProduct] = useState({});
  const { editProduct } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const loadProduct = async () => {
    const product = await get(id);
    editProduct.setProduct(product);
    setProduct(product);
  };

  const onSaveClick = () => {
    update(
      id,
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
    editProduct.setProduct(product);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <ProductForm />
      <TextButton text="Сохранить" callback={onSaveClick} />
      <TextButton text="Отмена" callback={onCancelClick} />
    </>
  );
});

export default EditProductForm;
