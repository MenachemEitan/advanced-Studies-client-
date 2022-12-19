import { useState } from "react";
import { PostQuestions } from "../axios";
import { AddImage } from "./AddImage";
import { Answer } from "./Answer";

export const AddQuestions = (props) => {
  const [message, setMessage] = useState([]);

  const [answerA, setAnswerA] = useState();
  const [answerB, setAnswerB] = useState();
  const [answerC, setAnswerC] = useState();
  const [answerD, setAnswerD] = useState();
  const [correct, setCorrect] = useState();
  const [image, setImage] = useState();

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

  const handleCorrect = (e) => {
    setCorrect(e.target.value);
  };

  const saveQuestions = async () => {
    let data = {
      question: props.question,
      optionalAnswers: [answerA, answerB, answerC, answerD],
      answer: correct,
      difficulty: 1,
    };
    const postQuestions = await PostQuestions(
      "addquestion",
      props.className,
      data,
      image
    );
    if (postQuestions.length != 0) {
      setMessage(postQuestions);
    } else {
      setMessage("Success");
    }
  };

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
      <label htmlFor="">The correct answer </label>
      <select name="" id="" onChange={handleCorrect}>
        <option value="default" hidden></option>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
        <option value="4">D</option>
      </select>
      <AddImage setImage={setImage}>upload Image</AddImage>
      <div className="row right pad">
        <button onClick={saveQuestions} className="btn black">
          Add
        </button>
      </div>

      {message && <h4>{message}</h4>}
    </div>
  );
};
