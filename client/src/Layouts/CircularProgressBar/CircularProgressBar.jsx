import React from "react";
import "./CircularProgressBar.css";
import "react-circular-progressbar/dist/styles.css";

export const CircularProgressBar = () => {
  return (
    <div>
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> 75% </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
