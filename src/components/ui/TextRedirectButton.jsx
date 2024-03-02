import { useNavigate } from "react-router-dom";

import TextButton from "./TextButton";


const TextRedirectButton = ({ text, route }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => () => {
    navigate(route);
  };

  return (
    <>
      <TextButton text={text} callback={navigateTo(route)}/>
    </>
  );
};

export default TextRedirectButton;
