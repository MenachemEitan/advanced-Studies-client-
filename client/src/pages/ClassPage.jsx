import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import Questions from "../components/Questions";
import EndgPage from "../components/EndPage";
import Button from "../Layouts/Button/Button";
import Img from "../Layouts/Img/Img";
import { qestionList } from "../mookData";

const ClassPage = ({ setToggledClass, currntClass }) => {
  // const img = require(`../assets/img/${currntClass.introPhoto}.png`);
  const [toggleQuestions, setToggleQuestions] = useState(true);
  const [count, setCount] = useState(0);
  const [classQuestions, getClassQuestions] = useState();
  const [qestion, setQuestion] = useState();
  const [previousBtnDisplay, setPreviousBtnDisplay] = useState("none");
  const [classEnded, setClassEnded] = useState(false);
  const img = currntClass.img ? currntClass.img : "";

  useEffect(() => {
    if (count > 0) {
      setPreviousBtnDisplay("block");
    } else {
      setPreviousBtnDisplay("none");
    }
    if (count >= classQuestions?.length) {
      setClassEnded(true);
    }
  }, [count]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const classQuestionsTemp = [];

      const resp = await axios.get(`${baseUrl}/class/${currntClass._id}`);

      const questionsIds = await resp.data.data.question;

      console.log("questionsIds", questionsIds);

      for (let questionId of questionsIds) {
        const temp = await axios.get(`${baseUrl}/class/question/${questionId}`);

        classQuestionsTemp.push(temp.data.data);
      }
      getClassQuestions(classQuestionsTemp);
    } catch (err) {
      console.log(err);
    }
  };

  const handleQuestions = () => {
    setToggleQuestions(!toggleQuestions);
  };

  // setTimeout(() => {
  //   setLoader(false);
  // }, [500]);
  return (
    <div className="class-page fade-in">
      {classEnded ? (
        <EndgPage setToggledClass={setToggledClass} />
      ) : (
        <>
          <Button
            icon={"chevron-left"}
            onClick={(toggledClass) => {
              setToggledClass(!toggledClass);
            }}
            text="Back to Classes"
            className="back-btn"
          ></Button>
          {toggleQuestions ? (
            <>
              <div className="class-page-content col">
                <div
                  className="title"
                  style={{ fontFamily: "Helvetica", fontWeight: 100 }}
                >
                  <h2>
                    <b>{currntClass.className}</b>
                  </h2>
                </div>
                <img
                  src={`${baseUrl}/class/getpic/pic/${img}`}
                  style={{ width: "500px" }}
                  className="pad"
                ></img>
                {/* <Img src={img} className={"intro-img"}></Img> */}
                <div className="pad">
                  <p>{currntClass.classText}</p>
                </div>
                <button className="pad btn black" onClick={handleQuestions}>
                  Start Class
                </button>
              </div>
            </>
          ) : (
            <Questions
              currntClass={currntClass}
              setCount={setCount}
              count={count}
              qestion={qestion}
              setQuestion={setQuestion}
              previousBtnDisplay={previousBtnDisplay}
              classQuestions={classQuestions}
            ></Questions>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default ClassPage;
