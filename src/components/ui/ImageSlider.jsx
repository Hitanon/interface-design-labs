import { MOCK_IMAGE_URL } from "../../utils/Consts";

import "./ui.css";


const ImageSlider = ({ images }) => {
  return (
    <div>
      <img className="image-slider" src={MOCK_IMAGE_URL} alt="logo" />
    </div>
  );
};

export default ImageSlider;
