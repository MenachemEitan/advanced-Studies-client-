import React from "react";
//
import ClassCard from "./ClassCard";

const MyClasses = ({ classesList, choseClass }) => {
  console.log(choseClass);
  return (
    <div className="MyClasses">
      <div className="cards-title">My Classes</div>
      <div className="classes row">
        {classesList.map((singleClass) => (
          <ClassCard
            choseClass={choseClass}
            id={singleClass.id}
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

export default MyClasses;
