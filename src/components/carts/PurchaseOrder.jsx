import { useNavigate } from "react-router-dom";
import { useState } from "react";

import TextRedirectButton from "../ui/TextRedirectButton";

import { MAIN_ROUTE, PROFILE_ROUTE } from "../../utils/Consts";

import CartItems from "./CartItems";

import "./carts.css";

const PurchaseOrder = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Старый деревянный рабочий стол",
      price: 33500,
      quantity: 1,
      images: ["/img/table.png"],
      seller: { id: 1, name: "Seller1" },
      rating: 4.8,
      unitsInStock: 5,
    },
    {
      id: 2,
      name: "Минималистичная книжная полка",
      price: 12750,
      quantity: 2,
      images: ["/img/shelf.png"],
      seller: { id: 2, name: "Seller2" },
      rating: 4.6,
      unitsInStock: 7,
    },
  ]);

  const onPurchaseClick = () => {
    alert("Покупка оформлена!");
    setCartItems([]);
    navigate(PROFILE_ROUTE);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container section-without-items">
        <h3 className="text-center">
          У вас нет товаров. Вы можете их добавить из главной страницы. Ждем
          ваших покупок :)
        </h3>
        <TextRedirectButton
          className="to-main-button"
          text={"На главную"}
          route={MAIN_ROUTE}
        />
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="container section-with-items">
        <div className="row gy-3">
          <h1 className="col-12">Корзина</h1>
          <CartItems items={cartItems} callBack={onPurchaseClick} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
