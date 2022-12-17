import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/atom.png";
import { forLogout, getToken, getUserData } from "../auth/localStorage";
import PopUp from "../Layouts/PopUp/PopUp";
import { LoginModal } from "../modals/LoginModal";
import { SignUpModal } from "../modals/SignUpModal";

import Navbar from "./Navbar";

const Header = () => {
  const token = getToken();
  const [isLogin, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(true);

  // const permission = () => {
  //   if (token) {
  //     let permissions = getUserData();
  //     if (permissions.permissions === "admin") {
  //       setAdmin(true);
  //     }
  //   }
  // };

  useEffect(() => {
    // permission();
    if (token) {
      setLogin(true);
    }
  }, [isLogin]);

  const handleLogOut = () => {
    forLogout();
    setLogin(false);
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
            {!isLogin && <LoginModal setLogin={setLogin}> Login </LoginModal>}
            {!isLogin && <SignUpModal setLogin={setLogin}>Sign Up</SignUpModal>}
            {isLogin && (
              <div onClick={handleLogOut} className="pad pointer">
                Log out
              </div>
            )}
            <div className="col left pad">
              {true && (
                <NavLink to={"/admin"} className="nav-link">
                  Admin
                </NavLink>
              )}
            </div>
          </div>
        </PopUp>
      </div>
    </header>
  );
};

export default Header;
