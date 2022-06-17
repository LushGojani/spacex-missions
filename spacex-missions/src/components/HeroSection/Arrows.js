import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import classes from "./Slider.module.css";
const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className={classes.arrows}>
      <MdOutlineArrowBackIosNew className={classes.prev} onClick={prevSlide} />

      <MdOutlineArrowForwardIos className={classes.next} onClick={nextSlide} />
    </div>
  );
};

export default Arrows;
