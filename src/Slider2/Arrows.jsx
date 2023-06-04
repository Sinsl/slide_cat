import React, { useContext } from "react";
import { SliderContext } from "./Slider2";

export const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)}>
      <span className="material-icons">arrow_back_ios</span>
      </div>
      <div className="arrow right" onClick={() => changeSlide(1)}>
      <span className="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  );
}