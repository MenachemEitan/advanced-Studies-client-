import React from "react";
import "./CircularProgressBar.css";
import "react-circular-progressbar/dist/styles.css";

export const CircularProgressBar = ({ index, num, precent }) => {
  const setProgressBar = () => {
    let root = document.querySelector(":root");
    let rootStyles = getComputedStyle(root);
    let deg = rootStyles.getPropertyValue(`--deg${index}`);
    // 70deg
    root.style.setProperty(`--deg${index}`, ` ${precent}deg`);
    console.log(deg);
  };

  setProgressBar();
  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className={`mask full-${index}`}>
          <div className={`fill-${index}`}></div>
        </div>
        <div className="mask half">
          <div className={`fill-${index}`}></div>
        </div>
        <div className="inside-circle"> {num}% </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
