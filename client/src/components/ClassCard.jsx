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
  console.log(
    "index,  num,  precent,singleClass._id",
    index,
    num,
    precent,
    singleClass._id
  );
  return (
    <div
      className="card2  col pad"
      onClick={() => {
        choseClass(singleClass._id, classes);
      }}
    >
      <div className="col">
        <div className="class-title row pad">{classTitle}</div>

        <div className="col">
          {isOpen && (
            <CircularProgressBar index={index} num={num} precent={precent} />
          )}
        </div>
        <div className="row">
          {singleClass?.icon ? (
            <img
              src={`${baseUrl}/class/getpic/pic/${singleClass?.icon}`}
              className="card-img pad"
            ></img>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
