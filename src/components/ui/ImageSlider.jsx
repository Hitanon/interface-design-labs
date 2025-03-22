import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import { BASE_API_URL } from "../../utils/Consts";

import "./ui.css";

const ImageSlider = ({ urls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <AwesomeSlider
        onTransitionRequest={(event) => {
          setCurrentSlide(event.index);
        }}
        bullets={false}
        className="square-slider"
      >
        {urls.map((url, index) => (
          <div key={index} className="slider-content">
            <img src={url} alt="Slide" />
          </div>
        ))}
      </AwesomeSlider>
      <div className="custom-bullets">
        {urls.map((_, index) => (
          <div
            key={index}
            className={`custom-bullet ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;