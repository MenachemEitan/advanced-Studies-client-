import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../axiosController";
import Button from "../Layouts/Button/Button";
import ButtonCol from "../Layouts/Button/ButtonCol";
import Animation from "./Animation";

const Questions = ({
  text,
  answers,
  setCount,
  count,
  setQuestion,
  previousBtnDisplay,
  classQuestions,
  currntClass,
}) => {
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [submit, setSubmit] = useState("");
  const [styles, setStyles] = useState("");
  const [answerSubmited, setAnswerSubmited] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [animation, setAnimation] = useState(false);

  const token = localStorage.getItem("Token");
  console.log("classQuestions", classQuestions);
  console.log("count", count);
  const qestion = classQuestions[count];
  console.log("qestion", qestion);

  const onSubmit = async () => {
    if (chosenAnswer == qestion.answer) {
      try {
        const token = localStorage.getItem("Token");
        if (token) {
          const resp = await axios.post(
            `${baseUrl}/class/login/submitAnswer/${qestion._id}`,
            {
              classId: currntClass._id,
            },
            {
              headers: {
                Authorization: token,
              },
            }
          );
          console.log("resp", resp);
        }
      } catch (err) {
        console.log(err);
      }

      setSubmit("right");
      setStyles("var(--clr-success)");
    } else {
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

    setSubmit(false);
    setAnswerSubmited(false);
    setDisabled(false);
    setSubmit("");
    setChosenAnswer("");
  };

  const goBack = () => {
    if (count > 0) {
      setCount(count - 1);
      setSubmit(false);
      setAnswerSubmited(false);
      setSubmit("");
      setChosenAnswer("");
    }
  };

  console.log("qestion", qestion);

  console.log("qestion?.optionalAnswers", qestion?.optionalAnswers);

  // console.log("qestion?.optionalAnswers[0]", qestion.optionalAnswers);

  return (
    <div className="class-page-content ">
      <img src={require(`../assets/img/motion.png`)}></img>

      <div className="row between">
        <div className="col left">
          <div className="qestion-text">
            <h4>
              <b>Qestion 1</b>
            </h4>
            <p>{qestion?.question}</p>
          </div>
        </div>

        <div className="col right ">
          <ButtonCol
            text={qestion?.optionalAnswers[0]}
            className={"btn gray"}
            qestionIndex={1}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion?.optionalAnswers[1]}
            className={"btn gray"}
            qestionIndex={2}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion?.optionalAnswers[2]}
            className={"btn gray"}
            qestionIndex={3}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
          <ButtonCol
            text={qestion?.optionalAnswers[3]}
            className={"btn gray"}
            qestionIndex={4}
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            submit={submit}
            styles={styles}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="row left"> animation</div>
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
            <div className="row between" style={{ width: "100%" }}>
              <div className="col pad">
                {/* <div className="pad">use animation </div> */}

                <div
                  style={{ width: "50px" }}
                  className="btn row "
                  onClick={() => {
                    setAnimation(!animation);
                  }}
                >
                  <i class="far fa-lightbulb"></i>
                </div>
              </div>
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
            </div>
          </>
        )}
        {/* <h3>{submit}</h3> */}

        {animation && (
          <div id="animation" className="animation fade-in">
            <div className=""></div>

            <Animation setAnimation={setAnimation}></Animation>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
