import React from "react";
import ClassCard from "./ClassCard";

const RecommendedClasses = ({ choseClass, recomendedClass, currntClass }) => {
  console.log("recomendedClass", recomendedClass);
  return (
    <div className="recommended-classes ">
      <div className="cards-title">recommended for you</div>

      <div className="classes row left">
        {recomendedClass.map(
          (singleClass) =>
            singleClass && (
              <ClassCard
                singleClass={singleClass}
                choseClass={choseClass}
                id={singleClass._id}
                classTitle={singleClass.className}
                photoUrl={singleClass.photoUrl}
                isOpen={false}
                key={singleClass._id}
                index={singleClass.index}
                precent={singleClass.precent}
                num={singleClass.num}
              />
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedClasses;
