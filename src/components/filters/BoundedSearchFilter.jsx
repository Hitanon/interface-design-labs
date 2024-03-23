import { useState } from "react";

import InputField from "../ui/InputField";


const BoundedSearchFilter = ({ lower, upper, inputType }) => {
  const [lowerValue, setLowerValue] = useState(lower.initialValue);
  const [upperValue, setUpperValue] = useState(upper.initialValue);

  const onValueChange = (value, callback, setValue) => {
    callback(value);
    setValue(value);
  };

  return (
    <>
      <div>
        {lower.label}
        <InputField
          type={inputType}
          value={lowerValue}
          callback={value => onValueChange(value, setLowerValue, lower.setValue)}
          validator={lower.validator}
        />
      </div>
      <div>
        {upper.label}
        <InputField
          type={inputType}
          value={upperValue}
          callback={value => onValueChange(value, setUpperValue, upper.setValue)}
          validator={upper.validator}
        />
      </div>
    </>
  );
};

export default BoundedSearchFilter;
