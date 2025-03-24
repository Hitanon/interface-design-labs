import AddToCartButtonFullProduct from "../ui/AddToCartButtonFullProduct";
import UserComment from "../customers/UserComment";
import SellerButton from "../sellers/SellerButton";
import CategoryButton from "../categories/CategoryButton";
import ImageSlider from "../ui/ImageSlider";
import ProductComments from "./ProductComments";
import ProductDescription from "./ProductDesctiption";

import "./products.css";

const Product = () => {
  const product = {
    id: 0,
    name: "Старый деревянный рабочий стол",
    price: 33500,
    rating: 4.76,
    images: ["/img/table1.jpg", "/img/table2.jpg"],
    seller: { id: 1, name: "Seller1" },
    category: { id: 2, name: "Мебель" },
    unitsInStock: 10,
    description:
      "Прочный рабочий стол из массива дуба. Идеален для домашнего офиса или творческой студии.",
  };

  return (
    <div className="container">
      <div className="row gy-3">

        <div className="col-12 col-lg-6 col-xl-6">
          <CategoryButton category={product.category} />
          <ImageSlider urls={product.images} />
        </div>

        <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
          <h2 className="product-price">
            {product.price} <span>₽</span>
          </h2>

          <h1 className="main-product-name">{product.name}</h1>

          <div className="full-rating">
            <div className="rating-icon"></div>
            {product.rating}
          </div>

          <SellerButton seller={product.seller} />

          <AddToCartButtonFullProduct />

          <div className="product-left">
            Осталось {product.unitsInStock} шт.
          </div>

          <ProductDescription product={product} />
        </div>

        <div className="col-12 col-lg-8 col-xl-7 py-xl-3">
          <div className="user-comment-section">
            <p>Ваш отзыв:</p>
            <UserComment />
          </div>
          <ProductComments />
        </div>
      </div>
    </div>
  );
};

export default Product;
