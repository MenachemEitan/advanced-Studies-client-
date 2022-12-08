import React from "react";
import Button from "../Layouts/Button/Button";
import Img from "../Layouts/Img/Img";

const ClassPage = ({ setToggledClass, currntClass }) => {
  const img = require(`../assets/img/${currntClass.introPhoto}.png`);
  return (
    <div className="class-page ">
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
          <button className="start-class-btn btn black">Start Class</button>
        </div>
      </div>

      {/* <Img src={img} width={600}></Img>
      <div className="qestion row">
        <div className="col left">
          <div className="qestion-text">
            <h4>
              <b>Qestion 1</b>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="col right">
          <button className="btn gray ">answer1</button>
          <button className="btn  gray">answer2</button>
          <button className="btn  gray">answer3</button>
          <button className="btn  gray">answer4</button>
        </div>
      </div>
      <div className="submit-btn row right">
        <button className="btn black">submit</button>
      </div> */}
    </div>
  );
};

export default ClassPage;
