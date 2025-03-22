import { useState } from "react";

import BoundedSearchFilter from "../../filters/BoundedSearchFilter";
import {
  LOWER_RATING_FILTER_LABEL,
  RATING_FILTER_LABEL,
  UPPER_RATING_FILTER_LABEL,
} from "../../../utils/Consts";

import "./filters.css";

const ProductRatingBoundedFilter = () => {
  const [lowerValue, setLowerValue] = useState(0);
  const [upperValue, setUpperValue] = useState(5);

  const lower = {
    label: LOWER_RATING_FILTER_LABEL,
    initialValue: lowerValue,
    setValue: setLowerValue,
  };

  const upper = {
    label: UPPER_RATING_FILTER_LABEL,
    initialValue: upperValue,
    setValue: setUpperValue,
  };

  return (
    <>
      <h2 className="filter-title">{RATING_FILTER_LABEL}</h2>
      <BoundedSearchFilter lower={lower} upper={upper} inputType="number" />
    </>
  );
};

export default ProductRatingBoundedFilter;
