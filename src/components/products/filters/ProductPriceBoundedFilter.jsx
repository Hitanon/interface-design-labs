import { useState } from "react";

import BoundedSearchFilter from "../../filters/BoundedSearchFilter";
import {
  PRICE_FILTER_LABEL,
  LOWER_PRICE_FILTER_LABEL,
  UPPER_PRICE_FILTER_LABEL,
} from "../../../utils/Consts";

import "./filters.css";

const ProductPriceBoundedFilter = () => {
  const [lowerValue, setLowerValue] = useState(0);
  const [upperValue, setUpperValue] = useState(0);

  const lower = {
    label: LOWER_PRICE_FILTER_LABEL,
    initialValue: lowerValue,
    setValue: setLowerValue,
  };

  const upper = {
    label: UPPER_PRICE_FILTER_LABEL,
    initialValue: upperValue,
    setValue: setUpperValue,
  };

  return (
    <>
      <h2 className="filter-title">{PRICE_FILTER_LABEL}</h2>
      <BoundedSearchFilter lower={lower} upper={upper} inputType="number" />
    </>
  );
};

export default ProductPriceBoundedFilter;
