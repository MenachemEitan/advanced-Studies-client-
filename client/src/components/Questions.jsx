import React, { useState } from "react";
import Button from "../Layouts/Button/Button";
import ButtonCol from "../Layouts/Button/ButtonCol";

const Questions = ({
  text,
  answers,
  qestion,
  setCount,
  count,
  setQuestion,
  previousBtnDisplay,
}) => {
  const img = require(`../assets/img/motion.png`);

  const [chosenAnswer, setChosenAnswer] = useState("");
  const [submit, setSubmit] = useState("");
  const [styles, setStyles] = useState("");
  const [answerSubmited, setAnswerSubmited] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = () => {
    if (qestion.answers[chosenAnswer] == qestion.rightAnswer) {
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

  const counter = () => {
    setCount(count + 1);
    console.log(count);
    setSubmit(false);
    setAnswerSubmited(false);
    setDisabled(false);
    setSubmit("");
    setChosenAnswer("");
  };

  const goBack = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
      setSubmit(false);
      setAnswerSubmited(false);
      setSubmit("");
      setChosenAnswer("");
    }
  };

  return (
    <div className="class-page-content">
      <img src={img}></img>
      <div className="row between">
        <div className="col left">
          <div className="qestion-text">
            <h4>
              <b>Qestion 1</b>
            </h4>
            <p>{qestion.qestion}</p>
          </div>
        </div>

        <div className="col right">
          <ButtonCol
            text={qestion.answers[0]}
            className={"btn gray"}
            qestionIndex={"0"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion.answers[1]}
            className={"btn gray"}
            qestionIndex={"1"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion.answers[2]}
            className={"btn gray"}
            qestionIndex={"2"}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion.answers[3]}
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
            <div className="row  right">
              {submit === "wrong" && (
                <Button
                  icon={"redo"}
                  text={" wrong try again"}
                  className="btn black"
                  onClick={postSubmit}
                ></Button>
              )}

              <button className="btn black" onClick={counter}>
                Next qestion
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="row right">
              <button
                className="btn black"
                onClick={goBack}
                style={{ display: previousBtnDisplay }}
              >
                previous qestion
              </button>
              <button
                className="btn black"
                onClick={onSubmit}
                disabled={!chosenAnswer}
              >
                submit
              </button>
            </div>
          </>
        )}
        {/* <h3>{submit}</h3> */}
      </div>
    </div>
  );
};

export default Questions;
