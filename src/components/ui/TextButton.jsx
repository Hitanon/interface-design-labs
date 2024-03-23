const TextButton = ({ text, callback }) => {
  return (
    <>
      <button onClick={callback}>{text}</button>
    </>
  );
};

export default TextButton;
