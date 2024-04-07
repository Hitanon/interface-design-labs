import useSeller from "../../hooks/useSeller";
import { EDIT_PRODUCT_ROUTE } from "../../utils/Consts";
import ProductInfo from "../products/ProductInfo";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";


const EditSellerProductForm = ({ product }) => {
  const { deleteProduct } = useSeller();

  const getEditProductRoute = () => {
    return EDIT_PRODUCT_ROUTE.replace(":id", product.id);
  };

  const onDeleteClick = async () => {
    await deleteProduct(product.id);
  };

  return (
    <>
      <ProductInfo product={product} withSlider={false} />
      <div>Категория: {product.category.name}</div>
      <TextRedirectButton text="Изменить" route={getEditProductRoute()} />
      <TextButton text="Удалить" callback={onDeleteClick} />
    </>
  );
};

export default EditSellerProductForm;
