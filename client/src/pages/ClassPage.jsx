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
  return (
    // <div>{currntClass.className}</div>
    <div className="class-page fade-in">
      <img
        src={`${baseUrl}/class/getpic/pic/${currntClass.icon}`}
        style={{ width: "100px" }}
        className="pad"
      ></img>

      {classEnded ? (
        <EndgPage />
      ) : (
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
                  src={`${baseUrl}/class/getpic/pic/${currntClass.img}`}
                  style={{ width: "500px" }}
                  className="pad"
                ></img>
                {/* <Img src={img} className={"intro-img"}></Img> */}
                <div className="pad">
                  <p>
                    Behavioral psychology is the study of observable behavior
                    and how it is influenced by environmental factors. In this
                    class, we will explore the theories and principles of
                    behavioral psychology and learn how they can be applied in
                    real-world settings. We will also examine various techniques
                    used in the field, such as operant and classical
                    conditioning, and learn how they can be used to shape and
                    modify behavior. By the end of the class, you should have a
                    solid understanding of this branch of psychology.
                  </p>
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
