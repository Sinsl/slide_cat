import React from "react";
import {SlideImage} from "./SlideImage";


export const Slide = ({ url, animation }) => {
  return (
    <div className={`slide ${animation && 'fadeInAnimation'}`}>
      <SlideImage src={url} alt='img' />
    </div>
  );
}