import React from "react";
import { useNavigate } from "react-router-dom";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";

const ClassCard = ({
  classTitle,
  index,
  num,
  precent,
  isOpen,
  photoUrl,
  choseClass,
  id,
}) => {
  const img = require(`../assets/img/${classTitle}.png`);

  // const pickClass = (id) => {
  //     choseClass(id);
  // }

  return (
    <div
      className="card2 pad col"
      onClick={() => {
        choseClass(id);
      }}
    >
      <div className="class-title row pad" style={{ width: "100px" }}>
        {" "}
        {classTitle}
      </div>
      {isOpen && (
        <CircularProgressBar index={index} num={num} precent={precent} />
      )}

      <img src={img} alt="" className="card-img pad" />
    </div>
  );
};

export default ClassCard;
