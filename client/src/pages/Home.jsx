import "../assets/index.css";
import homePagePhoto from "../assets/img/science.png";
import RecommendedClasses from "../components/RecommendedClasses";
import OpenClasses from "../components/OpenClasses";
import { classesList } from "../mookData";
import { useState } from "react";
import ClassPage from "./ClassPage";
const Home = () => {
  const [currntClass, setCurrntClass] = useState("");
  const [toggledClass, setToggledClass] = useState(false);
  const choseClass = (id) => {
    const filteredList = classesList.filter((singleClass) => {
      return singleClass.id === id;
    });
    const filteredClass = filteredList[0];
    setCurrntClass(filteredClass);
    setToggledClass(!toggledClass);
  };

  return (
    <div className="home-page page-top-pad">
      {toggledClass ? (
        <ClassPage
          currntClass={currntClass}
          setToggledClass={setToggledClass}
        />
      ) : (
        <>
          <div className="welcome-section row between ">
            <h2 className="col left">
              <b>hellow ido</b>
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
