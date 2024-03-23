import { MOCK_IMAGE_URL } from "../../utils/Consts";


const ImageField = ({ url }) => {
  return (
    <>
      <div>
        <img src={MOCK_IMAGE_URL} alt="img" style={{width: "100px"}}/>
      </div>
    </>
  );
};

export default ImageField;
