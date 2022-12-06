import React from "react";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";

const ClassCard = ({ classTitle, index, num, precent, isOpen }) => {
  const img = require("../assets/img/optics.png");
  return (
    <div className="card2 pad col">
      <div className="class-title row pad"> {classTitle}</div>
      {isOpen && (
        <CircularProgressBar index={index} num={num} precent={precent} />
      )}

      <img src={img} alt="" className="card-img pad" />
    </div>
  );
};

export default ClassCard;
