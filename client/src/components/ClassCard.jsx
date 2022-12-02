import React from "react";

const ClassCard = ({ classTitle }) => {
  const img = require("../assets/img/optics.png");
  return (
    <div className="card2 pad col">
      <div className="class-title row pad"> {classTitle}</div>
      <img src={img} alt="" className="card-img pad" />
    </div>
  );
};

export default ClassCard;
