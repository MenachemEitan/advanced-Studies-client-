import React from "react";
import { classesList } from "../mookData";
import ClassCard from "./ClassCard";

const Classes = () => {
  return (
    <div className="classes row">
      {classesList.map((singleClass) => (
        <ClassCard
          classTitle={singleClass.classTitle}
          photoUrl={singleClass.photoUrl}
        />
      ))}
    </div>
  );
};

export default Classes;
