import { BASE_API_URL } from "../../utils/Consts";
import "./ui.css";


const ImageField = ({ url, className }) => {
  return (
    <>
      <img className={className} src={BASE_API_URL + url} alt="img" />
    </>
  );
};

export default ImageField;
