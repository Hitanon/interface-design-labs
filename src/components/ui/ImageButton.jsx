import { useNavigate } from "react-router-dom";


const ImageButton = ({ src, alt, route }) => {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate(route);
  };

  return (
    <>
      <img src={src} alt={alt} onClick={onImageClick}/>
    </>
  );
};

export default ImageButton;
