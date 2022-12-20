import axios from "axios";
import React, { useContext, useState } from "react";
import { baseUrl } from "../axiosController";
import { UserContext } from "../context/UserContext";
import Button from "../Layouts/Button/Button";
import ButtonCol from "../Layouts/Button/ButtonCol";
import Animation from "./Animation";

const Questions = ({
  setCount,
  count,
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
  const context = useContext(UserContext);
  const qestion = classQuestions[count];
  const img = qestion?.img ? qestion?.img : "";

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
        context.getUser();
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

  return (
    <div className="class-page-content ">
      <div className="row">
        <img
          src={`${baseUrl}/class/getpic/pic/${img}`}
          className="qestion-img pad "
        ></img>
      </div>

      <div className="row between">
        <div className="col left">
          <div className="qestion-text">
            <h4>
              <b>{`Qestion ${count + 1}`}</b>
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
