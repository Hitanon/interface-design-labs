import useSeller from "../../hooks/useSeller";
import { EDIT_PRODUCT_ROUTE } from "../../utils/Consts";
import ProductInfo from "../products/ProductInfo";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";

import "./forms.css";

const EditSellerProductForm = ({ product }) => {
  const { deleteProduct } = useSeller();

  const getEditProductRoute = () => {
    return EDIT_PRODUCT_ROUTE.replace(":id", product.id);
  };

  const onDeleteClick = async () => {
    await deleteProduct(product.id);
  };

  return (
    <div className="product">
      <ProductInfo product={product} withSlider={false} />
      <div className="product-category">{product.category.name}</div>
      <TextRedirectButton className="change-product-button" text="Изменить" route={getEditProductRoute()} />
      <TextButton className="delete-product-button" text="Удалить" callback={onDeleteClick} />
    </div>
  );
};

export default EditSellerProductForm;
