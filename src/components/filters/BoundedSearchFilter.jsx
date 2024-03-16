import { useState } from "react";

import InputField from "../ui/InputField";
import useSearch from "../../hooks/useSearch";


const BoundedSearchFilter = ({ label, lower, upper, inputType }) => {
  const { search } = useSearch();

  const initialValue = "" ? inputType === "text" : 0;
  const [lowerValue, setLowerValue] = useState(initialValue);
  const [upperValue, setUpperValue] = useState(initialValue);

  const onValueChange = (name, value, callback) => {
    console.log(name, value);
    search.addParam({ name: name, value: value });
    callback(value);
  };

  return (
    <>
      <div>
        {label}
      </div>
      <div>
        {lower.label}
        <InputField
          type={inputType}
          value={lowerValue}
          callback={value => onValueChange(lower.name, value, setLowerValue)}
        />
      </div>
      <div>
        {upper.label}
        <InputField
          type={inputType}
          value={upperValue}
          callback={value => onValueChange(upper.name, value, setUpperValue)}
        />
      </div>
    </>
  );
};

export default BoundedSearchFilter;
