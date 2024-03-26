import "./ui.css";

const InputField = ({type, placeholder, value, callback, validator = () => true, className}) => {
  const onChange = (value) => {
    if (validator(value)) {
      callback(value);
    }
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
