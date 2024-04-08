import useSearch from "../../hooks/useSearch";
import { PRODUCT_ORDERS_OPTIONS } from "../../utils/Consts";
import SelectItemList from "../general/SelectItemList";

import "./products.css";


const ProductOrderer = () => {
  const { search } = useSearch();

  const selectOrderBy = (item) => {
    search.setOrderBy(item.codename);
  };

  const clearOrderBy = () => {
    search.clearOrderBy();
  };

  return (
    <>
      <SelectItemList itemClassName="order-item"
        className="orderer-list"
        items={PRODUCT_ORDERS_OPTIONS}
        setItem={selectOrderBy}
        clearSelected={clearOrderBy} />
    </>
  );
};

export default ProductOrderer;
