import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";

import ClassCard from "./ClassCard";

const PopularClasses = ({ classesList, choseClass }) => {
  const [popClasses, setPopClasses] = useState([]);

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = async () => {
    if (!popClasses.length) {
      const temp = await axios.get(`${baseUrl}/class/popularClass/get`);
      setPopClasses(temp.data.data);
      console.log(temp);
    }
  };

  console.log("popClasses=>", popClasses);
  return (
    <div className="PopularClasses ">
      <div className="cards-title">PopularClasses</div>
      <div className="classes row">
        {popClasses.map((singleClass) => (
          <ClassCard
            // choseClass={choseClass}
            // id={singleClass.id}
            classTitle={singleClass.className}
            // photoUrl={singleClass.photoUrl}
            // isOpen={false}
            // index={singleClass.index}
            // precent={singleClass.precent}
            // num={singleClass.num}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
