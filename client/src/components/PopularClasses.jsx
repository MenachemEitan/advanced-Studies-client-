import React from "react";
import { classesList } from "../mookData";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  return (
    <div className="PopularClasses ">
      <div className="cards-title">PopularClasses</div>
      <div className="classes row">
        {classesList.map((singleClass) => (
          <ClassCard
            classTitle={singleClass.classTitle}
            photoUrl={singleClass.photoUrl}
            isOpen={false}
            index={singleClass.index}
            precent={singleClass.precent}
            num={singleClass.num}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
