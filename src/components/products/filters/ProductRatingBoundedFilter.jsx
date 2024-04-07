import { useState } from "react";

import useSearch from "../../../hooks/useSearch";
import BoundedSearchFilter from "../../filters/BoundedSearchFilter";
import { LOWER_RATING_FILTER_LABEL, RATING_FILTER_LABEL, UPPER_RATING_FILTER_LABEL } from "../../../utils/Consts";


const ProductRatingBoundedFilter = () => {
  const INITIAL_VALUE = 0;
  const MAX_RATING_VALUE = 5;
  const LOWER_RATING_CODENAME = "lowerRating";
  const UPPER_RATING_CODENAME = "upperRating";
  const INPUT_TYPE = "number";
  const { search } = useSearch();
  const [upperValue, setUpperValue] = useState(INITIAL_VALUE);

  const setRating = (rating, codename) => {
    if (rating === INITIAL_VALUE) {
      search.removeParam(codename);
    } else {
      search.addParam({ name: codename, value: rating });
    }
  };

  const checkLowerRating = (rating) => {
    return rating >= INITIAL_VALUE && rating <= upperValue;
  };

  const setLowerRating = (rating) => {
    setRating(rating, LOWER_RATING_CODENAME);
  };

  const checkUpperRating = (rating) => {
    return rating >= INITIAL_VALUE && rating <= MAX_RATING_VALUE;
  };

  const setUpperRating = (rating) => {
    setRating(rating, UPPER_RATING_CODENAME);
    if (checkUpperRating(rating)) {
      setUpperValue(rating);
    }
  };

  const lower = {
    label: LOWER_RATING_FILTER_LABEL,
    initialValue: INITIAL_VALUE,
    setValue: setLowerRating,
    validator: checkLowerRating,
  };

  const upper = {
    label: UPPER_RATING_FILTER_LABEL,
    initialValue: INITIAL_VALUE,
    setValue: setUpperRating,
    validator: checkUpperRating,
  };

  return (
    <>
      <h2>
        {RATING_FILTER_LABEL}
      </h2>
      <BoundedSearchFilter lower={lower} upper={upper} inputType={INPUT_TYPE} />
    </>
  );
};

export default ProductRatingBoundedFilter;
