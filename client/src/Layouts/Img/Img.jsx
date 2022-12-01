import React from "react";

const Img = ({ width, hight, src }) => {
  return (
    <img
      className="home-page-img"
      src={src}
      style={{ height: hight, width: width }}
    ></img>
  );
};

export default Img;
