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
import PopularClasses from "../components/PopularClasses";
import { isLoggedIn } from "../auth/localStorage";

const Home = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();
  const [recomendedClass, setRecomendedClass] = useState([]);
  const context = useContext(UserContext);
  const myClassesIds = context?.user?.myClass;
  const islogged = isLoggedIn();

  console.log("islogged", islogged);

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
    <div className="home-page   fade-in">
      {toggledClass ? (
        <ClassPage
          currntClass={currntClass}
          setToggledClass={setToggledClass}
        />
      ) : (
        <>
          <div className="welcome-section row between ">
            <h2 className="col left ">
              {!islogged && <b>Wellcom to Advanced Studies!</b>}

              {islogged && (
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
          {islogged && (
            <>
              <MyClasses choseClass={choseClass} myClassesIds={myClassesIds} />
              <RecommendedClasses
                recomendedClass={recomendedClass}
                choseClass={choseClass}
              />
            </>
          )}

          <PopularClasses
            // popClasses={popClasses}
            choseClass={choseClass}
            currntClass={currntClass}
          />
        </>
      )}
    </div>
  );
};

export default Home;
