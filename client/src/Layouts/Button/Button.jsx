import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Button.css";
const Button = ({
  link = ["/home"],
  icon,
  onClick,
  text,
  style,
  className = [""],
}) => {
  return (
    <div className={`custom-btn ${className} row`} onClick={onClick}>
      {icon && <Icon Icon={icon} />}
      <div className="text">{text}</div>
    </div>
  );
};

export default Button;
