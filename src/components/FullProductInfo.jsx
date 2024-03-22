import { useEffect, useState } from "react";

import { getProduct } from "../clients/ProductClient";

import ProductComments from "./ProductComments";
import ProductOptions from "./ProductOptions";
import AddToCartButton from "./ui/AddToCartButton";
import UserComment from "./UserComment";
import ImageSlider from "./ui/ImageSlider";
import SellerButton from "./sellers/SellerButton";
import CategoryButton from "./categories/CategoryButton";


const FullProductInfo = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const loadFullProductInfo = async () => {
    setIsLoading(true);
    setProduct(await getProduct(id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadFullProductInfo();
  }, []);

  // TODO: refactor. Make it better
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <ImageSlider />
        <div>
          Name: {product.name}
        </div>
        <div>
          Description: {product.description}
        </div>
        <div>
          Price: {product.price}
        </div>
        <div>
          Rating: {product.rating}
        </div>
        <div>
          Unit in Stock: {product.unitsInStock}
        </div>
        <CategoryButton id={product.category.id} />
        <SellerButton id={product.seller.id} />
        <ProductOptions />
        <UserComment />
        <ProductComments />
        <hr />
        <AddToCartButton productId={product.id} />
      </div>
    </>
  );
};

export default FullProductInfo;
