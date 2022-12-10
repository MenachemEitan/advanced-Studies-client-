import React from "react";
import ClassCard from "./ClassCard";

const RecommendedClasses = ({ choseClass, classesList }) => {
  return (
    <div className="recommended-classes ">
      <div className="cards-title">recommended for you</div>

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

export default RecommendedClasses;
