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

const Home = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();
  const [recomendedClass, setRecomendedClass] = useState([]);
  const context = useContext(UserContext);
  const myClassesIds = context?.user?.myClass;

  useEffect(() => {
    getRecomendedClasses();
  }, []);

  const getRecomendedClasses = async () => {
    const token = localStorage.getItem("Token");

    try {
      const resp = await axios.get(`${baseUrl}/users/recommended`, {
        headers: {
          Authorization: token,
        },
      });

      setRecomendedClass(resp.data.data);
      console.log("recomendedClass", recomendedClass);
    } catch (err) {
      console.log(err);
    }
  };

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

          <MyClasses choseClass={choseClass} myClassesIds={myClassesIds} />

          <RecommendedClasses
            recomendedClass={recomendedClass}
            choseClass={choseClass}
          />
        </>
      )}
    </div>
  );
};

export default Home;
