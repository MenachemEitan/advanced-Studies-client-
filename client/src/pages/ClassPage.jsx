import React, { useState } from "react";
import Questions from "../components/Questions";
import Button from "../Layouts/Button/Button";
import Img from "../Layouts/Img/Img";

const ClassPage = ({ setToggledClass, currntClass }) => {
  const img = require(`../assets/img/${currntClass.introPhoto}.png`);
  const [toggleQuestions, setToggleQuestions] = useState(true);

  const handleQuestions = () => {
    setToggleQuestions(!toggleQuestions);
  };
  return (
    <div className="class-page ">
      {toggleQuestions ? (
        <>
          {" "}
          <Button
            icon={"chevron-left"}
            onClick={(toggledClass) => {
              setToggledClass(!toggledClass);
            }}
            text="Back to Classes"
            className="back-btn"
          ></Button>
          <div className="class-page-content col">
            <div
              className="title"
              style={{ fontFamily: "Helvetica", fontWeight: 100 }}
            >
              <h2>
                <b>{currntClass.classTitle}</b>
              </h2>
            </div>
            <Img src={img} className={"intro-img"}></Img>
            <div className="row pad">
              <p>
                This lesson is about kinematics and two-dimensional motion. Use
                illustrations and animations to help you get to the answers.
              </p>
              <div className="col">
                <div className="questions">Questions</div>
                <div className="row">
                  <button className="btn" style={{ width: "90px" }}>
                    level 1
                  </button>
                  <button className="btn" style={{ width: "90px" }}>
                    level 2
                  </button>
                </div>
                <div className="row">
                  <button className="btn" style={{ width: "90px" }}>
                    level 3
                  </button>
                  <button className="btn" style={{ width: "90px" }}>
                    level 4
                  </button>
                </div>
              </div>
              <button
                className="start-class-btn btn black"
                onClick={handleQuestions}
              >
                Start Class
              </button>
            </div>
          </div>
        </>
      ) : (
        <Questions></Questions>
      )}
    </div>
  );
};

export default ClassPage;
