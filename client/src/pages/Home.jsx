import "../assets/index.css";
import homePagePhoto from "../assets/img/science.png";
import RecommendedClasses from "../components/RecommendedClasses";
import OpenClasses from "../components/OpenClasses";
import { classesList } from "../mookData";
import { useState } from "react";
import ClassPage from "./ClassPage";
import useClass from "../Hooks/useClass";

const Home = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();

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
            <h2 className="col left">
              <b>Hello ido</b>
              <b> good progress so far!</b>
              <h6>classes completed: 5</h6>
            </h2>
            <div className=" row right">
              <img src={homePagePhoto} className="homePagePhoto"></img>
            </div>
          </div>
          <OpenClasses classesList={classesList} choseClass={choseClass} />
          <RecommendedClasses
            classesList={classesList}
            choseClass={choseClass}
          />
        </>
      )}
    </div>
  );
};

export default Home;
