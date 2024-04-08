import "./ui.css";

const InputField = ({type, placeholder, value, callback, validator = () => true, className, onKeyDown}) => {
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
      onKeyDown={onKeyDown}
    />
  );
};

export default InputField;
