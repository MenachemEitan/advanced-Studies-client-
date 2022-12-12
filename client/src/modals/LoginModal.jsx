import { useState } from "react";
import { createPortal } from "react-dom";
import { Login } from "../components/Login";

export const LoginModal = (props) => {
  const [isModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!isModal);
  };

  const Modal = () =>
    createPortal(
      <Login setLogin={props.setLogin} handleLoginModal={handleClick} />,
      document.getElementById("modal")
    );

  return (
    <div>
      <div className="pad" onClick={handleClick}>
        {props.children}
      </div>
      {isModal && <Modal />}
    </div>
  );
};
