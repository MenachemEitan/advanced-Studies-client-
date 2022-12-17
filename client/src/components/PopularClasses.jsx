import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";

import ClassCard from "./ClassCard";

const PopularClasses = ({ popClasses, choseClass, currntClass }) => {
  return (
    <div className="PopularClasses ">
      <div className="cards-title">Popular Classes</div>
      <div className="classes row">
        {popClasses.map((singleClass) => (
          <ClassCard
            currntClass={currntClass}
            classes={popClasses}
            singleClass={singleClass}
            choseClass={choseClass}
            id={singleClass.id}
            key={singleClass.id}
            classTitle={singleClass.className}
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
