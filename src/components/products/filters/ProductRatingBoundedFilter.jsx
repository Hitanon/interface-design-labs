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
    <div className="col-7 col-sm-6 col-md-4 offset-md-1 col-lg-3 col-xl-12 offset-xl-0">
      <h2 className="filter-title">{RATING_FILTER_LABEL}</h2>
      <BoundedSearchFilter lower={lower} upper={upper} inputType="number" />
    </div>
  );
};

export default ProductRatingBoundedFilter;
