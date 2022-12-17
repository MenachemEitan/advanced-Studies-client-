import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/img/atom.png";
import { forLogout, getToken } from "../auth/localStorage";
import axios from "axios";
import PopUp from "../Layouts/PopUp/PopUp";
import { LoginModal } from "../modals/LoginModal";
import { SignUpModal } from "../modals/SignUpModal";
import Navbar from "./Navbar";

const Header = () => {
  const token = getToken();
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLogin]);

  const handleLogOut = () => {
    forLogout();
    // setLogin(false);
  };
  return (
    <header className="header">
      <div className="row between">
        <div className="row ">
          <div className="header-title">
            <div className="row pad">
              <h3>
                <b>Advanced Studies</b>
              </h3>
              <img src={logo} className="header-img"></img>
            </div>
          </div>
          <Navbar />
        </div>

        <PopUp
          modal={"modal-1"}
          icon={"bars"}
          className={"modal"}
          style={{ color: "red" }}
        >
          <div className="col left pad">
            <div className="pad">Profile</div>
            {!isLogin && <LoginModal setLogin={setLogin}> Login </LoginModal>}
            {!isLogin && <SignUpModal setLogin={setLogin}>Sign Up</SignUpModal>}
            {isLogin && (
              <div className="pad" onClick={handleLogOut}>
                Log out
              </div>
            )}
          </div>
        </PopUp>
      </div>
    </header>
  );
};

export default Header;
