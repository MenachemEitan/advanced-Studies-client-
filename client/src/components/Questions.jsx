import React, { useState } from "react";
import Button from "../Layouts/Button/Button";
import ButtonCol from "../Layouts/Button/ButtonCol";

import { qestionList } from "../mookData";

const Questions = ({ text, answers }) => {
  const img = require(`../assets/img/motion.png`);
  const question = qestionList[0];
  const [chosenAnswer, setChosenAnswer] = useState();
  const [submit, setSubmit] = useState("");
  const [styles, setStyles] = useState("");
  const [answerSubmited, setAnswerSubmited] = useState(false);
  const [disabled, setDisabled] = useState(true);

  console.log(question);

  const onSubmit = () => {
    console.log(question.answers[chosenAnswer], question.rightAnswer);
    if (question.answers[chosenAnswer] == question.rightAnswer) {
      console.log("right");
      setSubmit("right");
      setStyles("var(--clr-success)");
    } else {
      console.log("wrong");
      setSubmit("wrong");
      setStyles("var(--clr---clr-danger)");
    }
    setAnswerSubmited(true);
    setDisabled(true);
  };

  const postSubmit = () => {
    setSubmit(false);
    setAnswerSubmited(false);
    setDisabled(false);
    setSubmit("");
  };

  return (
    <div className="class-page-content">
      <img src={img}></img>
      <div className="qestion row between">
        <div className="col left">
          <div className="qestion-text">
            <h4>
              <b>Qestion 1</b>
            </h4>
            <p>{question.qestion}</p>
          </div>
        </div>

        <div className="col right">
          <ButtonCol
            text={question.answers[0]}
            className={"btn gray"}
            qestionIndex={"0"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={question.answers[1]}
            className={"btn gray"}
            qestionIndex={"1"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={question.answers[2]}
            className={"btn gray"}
            qestionIndex={"2"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={question.answers[3]}
            className={"btn gray"}
            qestionIndex={"3"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="submit-btn col right">
        {answerSubmited ? (
          <>
            <div className="row">
              {submit === "wrong" && (
                <Button
                  icon={"redo"}
                  text={" wrong try again"}
                  className="btn black"
                  onClick={postSubmit}
                ></Button>
              )}

              <button className="btn black" onClick={postSubmit}>
                Next qestion
              </button>
            </div>
          </>
        ) : (
          <button className="btn black" onClick={onSubmit}>
            submit
          </button>
        )}
        <h3>{submit}</h3>
      </div>
    </div>
  );
};

export default Questions;
