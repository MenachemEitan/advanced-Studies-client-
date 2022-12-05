import React from "react";
import logo from "../assets/img/atom.png";
import Icon from "../Layouts/Icon/Icon";
import PopUp from "../Layouts/PopUp/PopUp";
import { LoginModal } from "../modals/LoginModal";
import { Login } from "./Login";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <div className="row between">
        <div className="row ">
          <div className="header-title">
            <div className="row">
              <h3>
                <b>Advanced Studies</b>
              </h3>
              <img src={logo} className="header-img"></img>
            </div>
          </div>
          <Navbar />
 <LoginModal>
  Login
 </LoginModal>
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
    </div>
  );
};

export default Header;
