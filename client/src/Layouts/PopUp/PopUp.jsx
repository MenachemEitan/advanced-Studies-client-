import React from "react";
import Icon from "../Icon/Icon";
import "./PopUp.css";
import ReactDOM from "react-dom";
const popUp = ({ children, modal, icon, className }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div for={modal}>
        <label for={modal} className="user-btn">
          <Icon Icon={icon}></Icon>
        </label>
        <input className="modal-state" id={modal} type="checkbox" />

        <div className={className}>
          <label className="modal__bg" for={modal}></label>

          <div className="modal__inner">
            <label className="modal__close" for={modal}></label>
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>,
    document.body
  );
};

export default popUp;
