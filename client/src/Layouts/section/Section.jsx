import { useState } from "react";
import Button from "../Button/Button";
import "./section.css";

const Section = ({ children, title = [""], content, text = [""] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const arrow = isOpen ? "down" : "right";
  const arrowAnimation = isOpen ? "arrow-down" : "arrow-right";
  return (
    <div className="profile-section ">
      <div className="row between" onClick={toggleIsOpen}>
        <b>{title}</b>
        <div>{!isOpen ? content : `${text} ${title}`}</div>
        <Button icon={`chevron-${"right"}`} className={arrowAnimation} />
      </div>
      <div className="row">{isOpen && children}</div>
    </div>
  );
};

export default Section;
