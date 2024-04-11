import TextButton from "../../ui/TextButton";

import ProductImagesForm from "./ProductImagesForm";
import ProductInfoForm from "./ProductInfoForm";
import ProductCategoryForm from "./ProductCategoryForm";

const ProductForm = ({onCreate, onCancel, applyText}) => {
  return (
    <div className="product-form">
      <div className="col1">
        <ProductImagesForm />
      </div>
      <div className="col2">
        <TextButton className="save-changes-button" text={applyText} callback={onCreate} />
        <TextButton className="cancel-changes-button" text="Отмена" callback={onCancel} />
        <ProductInfoForm />
        <ProductCategoryForm />
      </div>
    </div>
  );
};

export default ProductForm;
