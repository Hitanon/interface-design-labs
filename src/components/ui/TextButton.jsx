import "./ui.css";

const TextButton = ({ text, callback, className}) => {
  return (
    <>
      <button className={className} onClick={callback}>{text}</button>
    </>
  );
};

export default TextButton;
