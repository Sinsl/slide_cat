import React, { useContext } from "react";
import { SliderContext } from "./Slider2";


export const Dot = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}