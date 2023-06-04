import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { getImages } from "../source/getImages";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";
import { SlidesList } from "./SlidesList";
import { Slide } from "./Slide";
import '../css/slider.css';

export const SliderContext = createContext();

export const Slider2 = ({ width, height, autoPlay, autoPlayTime }) => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const images = getImages();
    setItems(images);
  }, []);

  const changeSlide = (direction = 1) => {
    setAnimation(false);
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout)
    }
  };

  const goToSlide = (number) => {
    setAnimation(false);
    setSlide(number % items.length);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout)
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);

  return (
    <div className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        {/* <SlidesList /> */}
        {
          items.length ? (
            <Slide url={items[slide]} animation={animation} />
          ) : null
        }
        <Dots />
      </SliderContext.Provider> 
    </div>
  );
};

Slider2.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider2.defaultProps = {
  autoPlay: true,
  autoPlayTime: 3000,
  width: "100%",
  height: "100%"
};