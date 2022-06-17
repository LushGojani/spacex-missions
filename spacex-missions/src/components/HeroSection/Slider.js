import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./SliderImage";
import classes from "./Slider.module.css";

const len = sliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === len ? 0 : prev + 1));
    }, 5000000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevSlide = () => {
    setActiveIndex((prev) => (prev < 1 ? len : prev - 1));
  };
  const handleNextSlide = () => {
    setActiveIndex((prev) => (prev === len ? 0 : prev + 1));
  };
  const handleDotsClick = (activeIndex) => {
    setActiveIndex(activeIndex);
  };
  return (
    <section className={classes["hero-container"]}>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows prevSlide={handlePrevSlide} nextSlide={handleNextSlide} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        dotClick={handleDotsClick}
      />
    </section>
  );
};

export default Slider;
