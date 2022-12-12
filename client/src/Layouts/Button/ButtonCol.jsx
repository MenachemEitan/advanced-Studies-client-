import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Button.css";
const ButtonCol = ({
  onClick,
  text,
  className,
  qestionIndex,
  setChosenAnswer,
  chosenAnswer,
  submit,
  styles = { styles },
  disabled,
}) => {
  let style = chosenAnswer == qestionIndex ? "gray" : "";

  if (submit) {
    if (chosenAnswer == qestionIndex) {
      style = submit === "right" ? styles : "red";
    }
  }

  const handleClick = () => {
    setChosenAnswer(qestionIndex);
  };
  return (
    <button
      className={`btn-link ${className} row`}
      onClick={handleClick}
      style={{ backgroundColor: style }}
      disabled={disabled}
    >
      <div className="text">{text}</div>
    </button>
  );
};

export default ButtonCol;
