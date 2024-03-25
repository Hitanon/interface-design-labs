import { useContext, useEffect, useState } from "react";

import AddToCartButton from "../ui/AddToCartButton";
import UserComment from "../customers/UserComment";
import ImageSlider from "../ui/ImageSlider";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import { Context } from "../..";
import useProducts from "../../hooks/useProducts";

import ProductComments from "./ProductComments";


const Product = ({ id }) => {
  const { product } = useContext(Context);
  const { get } = useProducts();
  const [isLoading, setIsLoading] = useState(true);

  const loadProduct = async () => {
    setIsLoading(true);
    product.setProduct(await get(id));
    setIsLoading(false);
  };

  useEffect(() => {
    loadProduct();
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
        <UserComment />
        <ProductComments comments={product.comments} />
        <hr />
        <AddToCartButton id={product.id} />
      </div>
    </>
  );
};

export default Product;
