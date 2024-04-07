import { useState } from "react";

import InputField from "../ui/InputField";

import "./filters.css";


const BoundedSearchFilter = ({ lower, upper, inputType }) => {
  const [lowerValue, setLowerValue] = useState(lower.initialValue);
  const [upperValue, setUpperValue] = useState(upper.initialValue);

  const onValueChange = (value, callback, setValue) => {
    callback(value);
    setValue(value);
  };

  return (
    <div className="input-section">
      <div className="input-value-section">
        <p className="input-label">{lower.label}</p>
        <InputField
          type={inputType}
          value={lowerValue}
          callback={value => onValueChange(value, setLowerValue, lower.setValue)}
          validator={lower.validator}
          className="input-value"
        />
      </div>
      <div className="input-value-section">
        <p className="input-label">{upper.label}</p>
        <InputField
          type={inputType}
          value={upperValue}
          callback={value => onValueChange(value, setUpperValue, upper.setValue)}
          validator={upper.validator}
          className="input-value"
        />
      </div>
    </div>
  );
};

export default BoundedSearchFilter;
