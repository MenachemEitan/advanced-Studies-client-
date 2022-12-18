import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import ClassCard from "./ClassCard";

const PopularClasses = ({ choseClass, currntClass }) => {
  const [popClasses, setPopClasses] = useState([]);

  useEffect(() => {
    getPopularClasses();
  }, []);

  const getPopularClasses = async () => {
    if (!popClasses.length) {
      const temp = await axios.get(`${baseUrl}/class/popularClass/get`);
      setPopClasses(temp.data.data);
    }
  };

  console.log("popClasses", popClasses);

  return (
    <div className="popular-classes ">
      <div className="cards-title">Popular Classes</div>
      <div className="classes row">
        {popClasses.map((singleClass) => (
          <ClassCard
            currntClass={currntClass}
            classes={popClasses}
            singleClass={singleClass}
            choseClass={choseClass}
            id={singleClass.id}
            key={singleClass._id}
            text={singleClass.text}
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
