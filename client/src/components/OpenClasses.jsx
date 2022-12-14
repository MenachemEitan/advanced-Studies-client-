import React from "react";
import ClassCard from "./ClassCard";

const OpenClasses = ({ classesList, choseClass }) => {
  return (
    <div className="open-classes ">
      <div className="cards-title">Countinue learning</div>
      <div className="classes row">
        {classesList.map((singleClass) => (
          <ClassCard
            choseClass={choseClass}
            id={singleClass.id}
            classTitle={singleClass.classTitle}
            photoUrl={singleClass.photoUrl}
            isOpen={true}
            key={singleClass.id}
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
