import { BASE_API_URL } from "../../utils/Consts";
import "./ui.css";


const ImageField = ({ url }) => {
  return (
    <>
      <div>
        <img className="image-field" src={BASE_API_URL + url} alt="img"/>
      </div>
    </>
  );
};

export default ImageField;
