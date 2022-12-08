import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Button.css";
const ButtonCol = ({ link = ["/home"], icon, onClick, text, style }) => {
  const [pressed, setPressed] = useState(true);
  const color = pressed ? "blue" : "gray";
  const handleClick = () => {
    // onClick();
    setPressed(!pressed);
    console.log(pressed);
  };
  return (
    <div
      className={`btn-col  ${color} row between`}
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <Link to={link} style={style} className={"btn-link row"}>
        <Icon Icon={icon} />
        <h6>{text}</h6>
      </Link>
    </div>
  );
};

export default ButtonCol;
