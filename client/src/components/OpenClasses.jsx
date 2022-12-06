import React from "react";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";
import { classesList } from "../mookData";
import ClassCard from "./ClassCard";
import Classes from "./Classes";

const OpenClasses = () => {
  return (
    <div className="open-classes ">
      <div className="cards-title">Countinue learning</div>
      <div className="row">
        {classesList.map((singleClass) => (
          <ClassCard
            classTitle={singleClass.classTitle}
            photoUrl={singleClass.photoUrl}
            isOpen={true}
            index={singleClass.index}
            precent={singleClass.precent}
            num={singleClass.num}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenClasses;
