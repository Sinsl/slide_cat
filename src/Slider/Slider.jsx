import React, { useEffect, useState, createContext } from "react";
// import PropTypes from "prop-types";
import { getImages } from "../source/getImages";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";
import { SlidesList } from "./SlidesList";
import '../css/slider.css';

export const SliderContext = createContext();

export const Slider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const images = getImages();
    setItems(images);
  }, []);

  const changeSlide = (direction = 1) => {
    let sliderNumber = 0;
    if (slide + direction < 0) {
      sliderNumber = items.length - 1;
    } else {
      sliderNumber = (slide + direction) % items.length;
    }

    setSlide(sliderNumber);
  }

  const goToSlide = (num) => {
    setSlide(num % items.length);
  }


  return (
     <div className="slider">
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};
