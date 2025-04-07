import "./ui.css";


const ImageField = ({ url, className, alt }) => {
  return (
    <>
      <img className={className} src={url} alt={alt} />
    </>
  );
};

export default ImageField;
