import { useState } from "react";
import { createPortal } from "react-dom";
import { SignUp } from "../components/SignUp";

export const SignUpModal = (props) => {
  const [isModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!isModal);
  };

  const Modal = () =>
    createPortal(
      <SignUp setLogin={props.setLogin} handleModal={handleClick} />,
      document.getElementById("modal")
    );

  return (
    <>
      <div className="pad" onClick={handleClick}>
        {props.children}
      </div>
      {isModal && <Modal />}
    </>
  );
};
