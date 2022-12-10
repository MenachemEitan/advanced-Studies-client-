import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../axiosController";
import { UserContext } from "../context/UserContext";
//
import ClassCard from "./ClassCard";

const MyClasses = ({ classesList, choseClass }) => {
  const context = useContext(UserContext);
  console.log("context?.user", context?.user);
  console.log("context?.user?.myClass", context?.user?.myClass);
  const [classes, setClasses] = useState([]);

  const myClasses = context?.user?.myClass;

  useEffect(() => {
    getClasses();
  }, [classes]);

  const getClasses = async () => {
    if (!classes.length) {
      const tempClassList = [...classes];

      for (let key in myClasses) {
        const temp = await axios.get(`${baseUrl}/class/${key}`);
        console.log("temp =>", temp);
        tempClassList.push(temp.data.data);
      }

      setClasses(tempClassList);
    }
  };
  let i = 1;
  console.log(classes);
  return (
    <div className="MyClasses">
      <div className="cards-title">My Classes</div>
      <div className="classes row">
        {classes.map((singleClass) => (
          <ClassCard
            choseClass={choseClass}
            id={singleClass.id}
            classTitle={singleClass.className}
            photoUrl={singleClass.photoUrl}
            isOpen={true}
            index={i++}
            precent={
              !myClasses[singleClass.id].length
                ? 0
                : (singleClass?.question?.length /
                    myClasses[singleClass.id]?.length) *
                  180
            }
            num={
              !myClasses[singleClass.id].length
                ? 0
                : (singleClass?.question?.length /
                    myClasses[singleClass.id]?.length) *
                  100
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
