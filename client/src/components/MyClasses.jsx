import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import ClassCard from "./ClassCard";

const MyClasses = ({ choseClass, myClassesIds }) => {
  const [myClasses, setMyClasses] = useState([]);

  console.log("myClasses", myClasses);

  useEffect(() => {
    getMyClasses();
  }, [myClassesIds]);

  const renderClass = useRef([]);

  let getMyClasses = async () => {
    let tempClassList = [];
    console.log("myClassesIds", myClassesIds);
    try {
      for (let key in myClassesIds) {
        let temp = await axios.get(`${baseUrl}/class/${key}`);
        console.log("temp", temp);
        tempClassList.push(temp?.data?.data);
        renderClass.current = tempClassList;
      }
      setMyClasses(tempClassList);
    } catch (err) {
      console.log(err);
    }
  };

  let i = 1;
  const title = myClasses.length ? "My Classes" : "";
  // const topFourClasses = myClasses.slice(0, 3);

  return (
    <div className="MyClasses">
      <div className="classes row left">
        <div className="col left">
          <div className="cards-title row ">{title}</div>
          <div className="row my-classes left">
            {myClasses.map((singleClass) => (
              <ClassCard
                singleClass={singleClass}
                classes={myClasses}
                choseClass={choseClass}
                id={singleClass._id}
                key={singleClass._id}
                classTitle={singleClass.className}
                isOpen={true}
                index={i++}
                precent={
                  !myClassesIds[singleClass._id].length
                    ? 0
                    : (myClassesIds[singleClass._id]?.length * 180) /
                      singleClass?.question?.length
                }
                num={
                  !myClassesIds[singleClass._id].length
                    ? 0
                    : (myClassesIds[singleClass._id]?.length * 100) /
                      singleClass?.question?.length
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
