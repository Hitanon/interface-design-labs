import { MOCK_IMAGE_URL } from "../../utils/Consts";


const ImageSlider = ({ images }) => {
  return (
    <>
      <div>
        <img src={MOCK_IMAGE_URL} alt="logo" style={{width: "100px"}}/>
      </div>
    </>
  );
};

export default ImageSlider;
