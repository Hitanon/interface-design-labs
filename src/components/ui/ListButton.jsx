import "./ui.css";

export const ListButton = ({ text, callback }) => {
  return (
    <>
      <button className="list-button" onClick={callback}> {text}</button>
    </>
  );
};

export default ListButton;
