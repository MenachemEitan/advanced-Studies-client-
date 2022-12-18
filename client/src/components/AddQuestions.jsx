import { useState } from "react";
import { PostQuestions } from "../axios";
import { Answer } from "./Answer";

export const AddQuestions = (props) => {
  const [message, setMessage] = useState([]);

  const [answerA, setAnswerA] = useState();
  const [answerB, setAnswerB] = useState();
  const [answerC, setAnswerC] = useState();
  const [answerD, setAnswerD] = useState();

  const handleQuestions = (e) => {
    props.setQuestions(e.target.value);
  };
  const handleAnswerA = (e) => {
    setAnswerA(e.target.value);
  };
  const handleAnswerB = (e) => {
    setAnswerB(e.target.value);
  };
  const handleAnswerC = (e) => {
    setAnswerC(e.target.value);
  };
  const handleAnswerD = (e) => {
    setAnswerD(e.target.value);
  };

  // console.log(answerA);
  // console.log(answerB);
  // console.log(answerC);
  // console.log(answerD);

  const saveQuestions = async () => {
    let data = {
      question: props.question,
      "optionalAnswers ": [answerA, answerB, answerC, answerD],
      answer: 1,
      difficulty: 1,
    };
    const postQuestions = await PostQuestions(
      "addquestion",
      props.className,
      data
    );
    if (postQuestions.length != 0) {
      setMessage(postQuestions);
      console.log(postQuestions);
    } else {
      console.log(postQuestions);
      setMessage("Success");
    }
  };
  // console.log(message);

  return (
    <div className="add-question">
      <div className="pad">
        <h3>Add new questions </h3>
      </div>

      <div className="pad">
        <textarea
          placeholder="write your question..."
          className="pad"
          name="questions"
          onChange={handleQuestions}
        ></textarea>
      </div>
      <div className="pad">
        <Answer setAnswer={handleAnswerA}>Answer A</Answer>
        <Answer setAnswer={handleAnswerB}>Answer B</Answer>
        <Answer setAnswer={handleAnswerC}>Answer C</Answer>
        <Answer setAnswer={handleAnswerD}>Answer D</Answer>
      </div>
      <div className="row right pad">
        <button onClick={saveQuestions} className="btn black">
          Add
        </button>
      </div>

      {message && <h4>{message}</h4>}
    </div>
  );
};
