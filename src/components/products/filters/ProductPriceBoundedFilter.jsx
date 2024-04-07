import { useState } from "react";

import BoundedSearchFilter from "../../filters/BoundedSearchFilter";
import { PRICE_FILTER_LABEL, LOWER_PRICE_FILTER_LABEL, UPPER_PRICE_FILTER_LABEL } from "../../../utils/Consts";
import useSearch from "../../../hooks/useSearch";


const ProductPriceBoundedFilter = () => {
  const INITIAL_VALUE = 0;
  const UPPER_PRICE_CODENAME = "upperPrice";
  const LOWER_PRICE_CODENAME = "lowerPrice";
  const inputType = "number";
  const { search } = useSearch();
  const [upperValue, setUpperValue] = useState(INITIAL_VALUE);

  const setPrice = (price, codename) => {
    if (price === INITIAL_VALUE) {
      search.removeParam(codename);
    } else {
      search.addParam({ name: codename, value: price });
    }
  };

  const checkLowerPrice = (price) => {
    return price >= INITIAL_VALUE && price <= upperValue;
  };


  const setLowerPrice = (price) => {
    setPrice(price, LOWER_PRICE_CODENAME);
  };

  const checkUpperPrice = (price) => {
    return price >= INITIAL_VALUE;
  };

  const setUpperPrice = (price) => {
    setPrice(price, UPPER_PRICE_CODENAME);
    setUpperValue(price);
  };

  const lower = {
    label: LOWER_PRICE_FILTER_LABEL,
    initialValue: INITIAL_VALUE,
    validator: checkLowerPrice,
    setValue: setLowerPrice,
  };

  const upper = {
    label: UPPER_PRICE_FILTER_LABEL,
    initialValue: INITIAL_VALUE,
    validator: checkUpperPrice,
    setValue: setUpperPrice,
  };

  return (
    <>
      <h2>
        {PRICE_FILTER_LABEL}
      </h2>
      <BoundedSearchFilter lower={lower} upper={upper} inputType={inputType} />
    </>
  );
};

export default ProductPriceBoundedFilter;
