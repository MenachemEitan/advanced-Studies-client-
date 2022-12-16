import React from "react";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";

const ClassCard = ({
  classes,
  classTitle,
  index,
  num,
  precent,
  isOpen,
  photoUrl,
  choseClass,
  id,
  singleClass = [""],
}) => {
  // const img = require(`../assets/img/${classTitle}.png`);
  // console.log(singleClass.id, classes);
  return (
    <div
      className="card2 pad col "
      onClick={() => {
        choseClass(singleClass._id, classes);
      }}
    >
      <div className="class-title row pad" style={{ width: "100px" }}>
        {classTitle}
      </div>
      {isOpen && (
        <CircularProgressBar index={index} num={num} precent={precent} />
      )}

      {/* <img src={img} alt="" className="card-img pad" /> */}
    </div>
  );
};

export default ClassCard;
