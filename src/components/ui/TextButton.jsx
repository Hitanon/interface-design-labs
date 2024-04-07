import "./ui.css";

const TextButton = ({ text, callback}) => {
  return (
    <>
      <button className="text-button" onClick={callback}>{text}</button>
    </>
  );
};

export default TextButton;
