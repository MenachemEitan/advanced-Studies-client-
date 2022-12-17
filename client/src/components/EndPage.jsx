import React from "react";
import { useNavigate } from "react-router-dom";

const EndPage = ({ setToggledClass }) => {
  const navigate = useNavigate();

  const handleHome = () => {};

  return (
    <div className="end-page fade-in">
      <div className="content">
        <div className="row">
          <h2 className="end-page-title pad">Well Done!</h2>
        </div>
        <p className="row ">{`you finish the ${"class"} class, keep up the good work! `}</p>
        <div className="row pad">
          <img
            src={require("../assets/img/lamp-ending-page.png")}
            style={{ width: "var(--img-sm)" }}
          ></img>
        </div>
        <div className="row right pad">
          <button
            className="btn black start-class-btn"
            onClick={(toggledClass) => {
              setToggledClass(!toggledClass);
            }}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
