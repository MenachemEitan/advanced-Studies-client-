import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import ClassCard from "./ClassCard";

const MyClasses = ({ choseClass, myClassesIds, currntClass }) => {
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    getMyClasses();
  }, []);

  const getMyClasses = async () => {
    try {
      const tempClassList = [];
      for (let key in myClassesIds) {
        const temp = await axios.get(`${baseUrl}/class/${key}`);
        console.log(temp.data.data);
        tempClassList.push(temp?.data?.data);
        console.log("tempClassList", tempClassList);
      }

      setMyClasses(tempClassList);
    } catch (err) {
      console.log(err);
    }
  };

  let i = 1;
  const title = myClasses.length ? "My Classes" : "";
  return (
    <div className="MyClasses">
      <div className="classes row left">
        <div className="col left">
          <div className="cards-title row ">{title}</div>
          <div className="row my-classes">
            {myClasses.map(
              (singleClass) =>
                singleClass && (
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
                        : (singleClass?.question?.length /
                            myClassesIds[singleClass._id]?.length) *
                          180
                    }
                    num={
                      !myClassesIds[singleClass._id].length
                        ? 0
                        : (singleClass?.question?.length /
                            myClassesIds[singleClass._id]?.length) *
                          100
                    }
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
