import { useState } from "react";

import BoundedSearchFilter from "../../filters/BoundedSearchFilter";
import { PRICE_FILTER_LABEL, LOWER_PRICE_FILTER_LABEL, UPPER_PRICE_FILTER_LABEL } from "../../../utils/Consts";
import useSearch from "../../../hooks/useSearch";


const ProductPriceBoundedFilter = () => {
  const initialValue = 0;
  const UPPER_PRICE_CODENAME = "upperPrice";
  const LOWER_PRICE_CODENAME = "lowerPrice";
  const { search } = useSearch();
  const [upperValue, setUpperValue] = useState(initialValue);

  const setPrice = (price, codename) => {
    if (price === initialValue) {
      search.removeParam(codename);
    } else {
      search.addParam({ name: codename, value: price });
    }
  };

  const checkLowerPrice = (price) => {
    return price >= 0 && price <= upperValue;
  };


  const setLowerPrice = (price) => {
    setPrice(price, LOWER_PRICE_CODENAME);
  };

  const checkUpperPrice = (price) => {
    return (price >= 0);
  };

  const setUpperPrice = (price) => {
    setPrice(price, UPPER_PRICE_CODENAME);
    setUpperValue(price);
  };

  const lower = {
    label: LOWER_PRICE_FILTER_LABEL,
    initialValue: initialValue,
    validator: checkLowerPrice,
    setValue: setLowerPrice,
  };

  const upper = {
    label: UPPER_PRICE_FILTER_LABEL,
    initialValue: initialValue,
    validator: checkUpperPrice,
    setValue: setUpperPrice,
  };

  return (
    <>
      <BoundedSearchFilter label={PRICE_FILTER_LABEL} lower={lower} upper={upper} inputType="number" />
    </>
  );
};

export default ProductPriceBoundedFilter;
