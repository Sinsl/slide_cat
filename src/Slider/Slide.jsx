import React from "react";
import {SlideImage} from "./SlideImage";


export const Slide = ({ url }) => {
  return (
    <div className="slide">
      <SlideImage src={url} alt='img'/>
    </div>
  );
}