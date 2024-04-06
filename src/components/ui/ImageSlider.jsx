import AwesomeSlider from "react-awesome-slider";

import { BASE_API_URL } from "../../utils/Consts";
import "./ui.css";
import "react-awesome-slider/dist/styles.css";


const ImageSlider = ({ urls }) => {
  return (
    <AwesomeSlider>
      {
        urls.map(url => <div key={url}><img src={BASE_API_URL + url} alt="logo" /></div>)
      }
    </AwesomeSlider>
  );
};

export default ImageSlider;
