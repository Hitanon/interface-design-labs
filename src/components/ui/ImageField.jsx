import "./ui.css";


const ImageField = ({ url, className }) => {
  return (
    <>
      <img className={className} src={url} alt="img" />
    </>
  );
};

export default ImageField;
