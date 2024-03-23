import useSearch from "../../hooks/useSearch";
import { PRODUCT_ORDERS_OPTIONS } from "../../utils/Consts";
import SelectItemList from "../general/SelectItemList";


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
      <SelectItemList items={PRODUCT_ORDERS_OPTIONS} setItem={selectOrderBy} clearSelected={clearOrderBy} />
    </>
  );
};

export default ProductOrderer;
