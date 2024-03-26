import { EDIT_PRODUCT_ROUTE } from "../../utils/Consts";
import ProductCard from "../products/ProductCard";
import ImageSlider from "../ui/ImageSlider";
import TextButton from "../ui/TextButton";
import TextRedirectButton from "../ui/TextRedirectButton";

const EditSellerProductForm = ({ product }) => {
  return (
    <>
      {/* <ProductCard id={product.id} /> */}

      <ImageSlider />

      <div>
        Name: {product.name}
      </div>
      <div>
        Price: {product.price}
      </div>
      <div>
        Rating: {product.rating}
      </div>
      <div>
        Units in stock: {product.unitsInStock}
      </div>

      <TextRedirectButton text="Edit product" route={EDIT_PRODUCT_ROUTE.replace(":id", product.id)} />
    </>
  );
};

export default EditSellerProductForm;
