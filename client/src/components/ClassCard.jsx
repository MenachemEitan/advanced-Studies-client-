import React from "react";
import { baseUrl } from "../axiosController";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";

const ClassCard = ({
  classes,
  classTitle,
  index,
  num,
  precent,
  isOpen,
  choseClass,
  singleClass = [""],
}) => {
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
      <div className="">
        {" "}
        {isOpen && (
          <CircularProgressBar index={index} num={num} precent={precent} />
        )}
      </div>
      {singleClass.icon ? (
        <img
          src={`${baseUrl}/class/getpic/pic/${singleClass?.icon}`}
          className="card-img pad"
        ></img>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClassCard;
