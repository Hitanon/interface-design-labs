import { useNavigate } from "react-router-dom";

import { PRODUCTS_ROUTE, SELLERS_ROUTE } from "../../utils/Consts";
import useCustomer from "../../hooks/useCustomer";

import TextButton from "../ui/TextButton";
import ImageField from "../ui/ImageField";

import OrderStatuses from "./OrderStatuses";


const OrderItem = ({ item }) => {
  const navigate = useNavigate();
  const { acceptOrderItem } = useCustomer();

  const onSellerClick = () => {
    navigate(`${SELLERS_ROUTE}/${item.product.seller.id}`);
  };

  const onProductClick = () => {
    navigate(`${PRODUCTS_ROUTE}/${item.product.id}`);
  };

  const isAcceptable = () => {
    return item.statuses[0].name === "SENT";
  };

  const onSubmitAcceptClick = async () => {
    acceptOrderItem(item.id);
  };

  return (
    <>
      <div onClick={onProductClick}>
        <div>
          <div>
            {item.product.name}
          </div>
          <ImageField url={item.product.images[0]} />
          <div>
            {item.product.price} ₽
          </div>
        </div>
        <div onClick={onSellerClick}>
          Продавец: {item.product.seller.name}
        </div>
        <div>
          <OrderStatuses statuses={item.statuses} />
        </div>
      </div>
      {isAcceptable() ? <TextButton text={"Подтвердить получение"} callback={onSubmitAcceptClick} /> : null}
    </>
  );
};

export default OrderItem;
