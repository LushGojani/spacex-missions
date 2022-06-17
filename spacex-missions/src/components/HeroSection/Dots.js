import React from "react";
import classes from "./Slider.module.css";

const Dots = ({ activeIndex, dotClick, sliderImage }) => {
  return (
    <div className={classes["all-dots"]}>
      {sliderImage.map((_, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index
              ? `${classes.dot} ${classes["active-dot"]}`
              : classes.dot
          }`}
          onClick={() => dotClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
