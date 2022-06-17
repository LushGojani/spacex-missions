import React from "react";
import classes from "./Slider.module.css";

const SliderContent = ({ activeIndex, sliderImage }) => {
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? `${classes.slides} ${classes.active}`
              : classes.inactive
          }
        >
          <img className={classes["slide-image"]} src={slide.urls} alt="" />
          <div className={classes["slide-text"]}>
            <h2 className={classes["slide-title"]}>{slide.title}</h2>
            <h3 className={classes["slide-subtitle"]}>{slide.describe}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderContent;
