const InputField = ({type, placeholder, value, callback, validator = () => true}) => {
  const onChange = (value) => {
    if (validator(value)) {
      callback(value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
