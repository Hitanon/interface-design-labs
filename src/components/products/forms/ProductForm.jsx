import { useContext, useEffect } from "react";

import { Context } from "../../..";

import ProductCategoryForm from "./ProductCategoryForm";
import ProductImagesForm from "./ProductImagesForm";
import ProductInfoForm from "./ProductInfoForm";


const ProductForm = () => {
  const { editProduct } = useContext(Context);

  const onDestroy = () => {
    editProduct.clear();
  };

  useEffect(() => {
    return onDestroy;
  }, []);

  return (
    <>
      <ProductImagesForm />
      <ProductInfoForm />
      <ProductCategoryForm />
    </>
  );
};

export default ProductForm;
