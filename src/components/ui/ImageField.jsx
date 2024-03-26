import { MOCK_IMAGE_URL } from "../../utils/Consts";

import "./ui.css";


const ImageField = ({ url }) => {
  return (
    <>
      <div>
        <img className="image-field" src={MOCK_IMAGE_URL} alt="img"/>
      </div>
    </>
  );
};

export default ImageField;
