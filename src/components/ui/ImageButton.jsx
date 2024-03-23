import { useNavigate } from "react-router-dom";

import ImageField from "./ImageField";


const ImageButton = ({ src, alt, route }) => {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate(route);
  };

  return (
    <>
      <div onClick={onImageClick}>
        <ImageField />
      </div>
    </>
  );
};

export default ImageButton;
