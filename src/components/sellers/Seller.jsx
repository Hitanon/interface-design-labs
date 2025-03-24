import Products from "../products/Products";
import SellerHeader from "./SellerHeader";

const SellerInfo = () => {
  const seller = {
    id: 1,
    name: "Интерьерная мастерская 'Уют'",
    rating: 4.85,
    sales: 24,
    sellsFrom: "2019-04-15",
    description:
      "Мебель и предметы интерьера, сделанные с душой. Работаем с натуральным деревом, создаем вещи, которые живут долго и радуют глаз.",
  };

  return (
    <div className="container">

      <div className="row py-4">
        <SellerHeader seller={seller} />
      </div>

      <div className="row py-4 seller-product-container">
        <h2 className="seller-products-title">Товары</h2>
        <Products />
      </div>
    </div>
  );
};

export default SellerInfo;
