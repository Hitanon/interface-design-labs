import { EDIT_PRODUCT_ROUTE } from "../../utils/Consts";
import ProductInfo from "../products/ProductInfo";
import TextRedirectButton from "../ui/TextRedirectButton";


const EditSellerProductForm = ({ product }) => {
  const getEditProductRoute = () => {
    return EDIT_PRODUCT_ROUTE.replace(":id", product.id);
  };

  return (
    <>
      <ProductInfo product={product} />
      <TextRedirectButton text="Edit product" route={getEditProductRoute()} />
    </>
  );
};

export default EditSellerProductForm;
