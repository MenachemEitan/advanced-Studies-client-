import React from "react";
import logo from "../assets/img/atom.png";
import Icon from "../Layouts/Icon/Icon";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <div className="row between">
        <div className="row left">
          <div className="title pad">
            <div className="row left">
              <h3>
                <b>Advanced Studies</b>
              </h3>
              <img src={logo} className="header-img"></img>
            </div>
          </div>
          <Navbar />
        </div>
        <div className="pad">
          <Icon Icon={"bars"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
