import "../assets/index.css";
import homePagePhoto from "../assets/img/science.png";
import RecommendedClasses from "../components/RecommendedClasses";
import OpenClasses from "../components/OpenClasses";
import { classesList } from "../mookData";
import { useContext, useEffect, useState } from "react";
import ClassPage from "./ClassPage";
import useClass from "../Hooks/useClass";
import MyClasses from "../components/MyClasses";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { baseUrl } from "../axiosController";
import Animation from "../components/Animation";

const Home = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();
  const [img, setImg] = useState();
  const [myClasses, setMyClasses] = useState([]);
  const context = useContext(UserContext);
  const myClassesIds = context?.user?.myClass;

  // console.log(context?.user.userName);

  useEffect(() => {
    getMyClasses();
  }, []);

  const getMyClasses = async () => {
    if (!myClasses.length) {
      const tempClassList = [...myClasses];

      for (let key in myClassesIds) {
        const temp = await axios.get(`${baseUrl}/class/${key}`);
        tempClassList.push(temp.data.data);
      }

      setMyClasses(tempClassList);
    }
  };

  const getRecomendedClasses = async () => {
    const token = localStorage.getItem("Token");
    console.log("token", token);
    try {
      const resp = await axios.get(`${baseUrl}/users/recommended`, {
        headers: {
          Authorization: token,
        },
      });
      console.log("resp", resp);
    } catch (err) {
      console.log(err);
    }
  };

  getRecomendedClasses();

  return (
    <div className="home-page page-top-pad ">
      {toggledClass ? (
        <ClassPage
          currntClass={currntClass}
          setToggledClass={setToggledClass}
        />
      ) : (
        <>
          <div className="welcome-section row between ">
            <h2 className="col left fade-in">
              {!context?.user && <b>Wellcom to Advanced Studies!</b>}

              {context?.user && (
                <>
                  <b>{`Hello ${context?.user?.userName} `}</b>
                  <b>{`good progress so far!`}</b>
                </>
              )}

              <h6>classes completed: 5</h6>
            </h2>
            <div className=" row right">
              <img src={homePagePhoto} className="homePagePhoto"></img>
            </div>
          </div>
          {/* <OpenClasses classesList={classesList} choseClass={choseClass} /> */}
          <MyClasses
            myClasses={myClasses}
            choseClass={choseClass}
            myClassesIds={myClassesIds}
          />
          <RecommendedClasses
            classesList={classesList}
            choseClass={choseClass}
          />
          {/* {<Animation></Animation>} */}
          {/* <div className="ani" id="ani"></div> */}
        </>
      )}
    </div>
  );
};

export default Home;
