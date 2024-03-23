import { useEffect, useState } from "react";

import { getProduct } from "../../clients/ProductClient";

import ProductOptions from "./ProductOptions";
import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import ImageSlider from "../ui/ImageSlider";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";

import ProductComments from "./ProductComments";


const Product = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({ category: {}, seller: {} });

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
    return <></>;
  }

  return (
    <>
      <div>
        <ImageSlider images={[]} />
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
        <ProductOptions options={product.options} />
        <UserComment />
        <ProductComments />
        <hr />
        <AddToCartButton id={product.id} />
      </div>
    </>
  );
};

export default Product;
