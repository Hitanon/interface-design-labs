export const ListButton = ({ text, callback }) => {
  return (
    <>
      <button onClick={callback}>||| {text}</button>
    </>
  );
};

export default ListButton;
