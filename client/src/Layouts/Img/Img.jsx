import React from "react";

const Img = ({ width, hight, src, className }) => {
  return (
    <img
      className={`home-page-img ${className}`}
      src={src}
      style={{ height: hight, width: width }}
    ></img>
  );
};

export default Img;
