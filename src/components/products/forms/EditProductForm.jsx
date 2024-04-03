import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "../../..";
import { PROFILE_ROUTE } from "../../../utils/Consts";
import TextButton from "../../ui/TextButton";
import useProducts from "../../../hooks/useProducts";
import useSeller from "../../../hooks/useSeller";

import ProductForm from "./ProductForm";


const EditProductForm = observer(() => {
  const { get } = useProducts();
  const [product, setProduct] = useState({});
  const { editProduct } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateProduct } = useSeller();

  const loadProduct = async () => {
    const product = await get(id);
    editProduct.setProduct(product);
    setProduct(product);
  };

  const onSaveClick = () => {
    updateProduct(
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

  const onDestroy = () => {
    editProduct.clear();
  };

  useEffect(() => {
    loadProduct();
    return onDestroy;
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
