const InputField = ({type, placeholder, value, callback}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => callback(e.target.value)}
    />
  );
};

export default InputField;
