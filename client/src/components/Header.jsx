import React from "react";
import logo from "../assets/img/atom.png";
import Icon from "../Layouts/Icon/Icon";
import PopUp from "../Layouts/PopUp/PopUp";
import Navbar from "./Navbar";
const Header = () => {
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
            <div className="pad">Logout</div>
          </div>
        </PopUp>
      </div>
    </header>
  );
};

export default Header;
