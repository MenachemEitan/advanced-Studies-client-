import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// 

import logo from "../assets/img/atom.png";
import { forLogout, getToken, getUserData } from "../auth/localStorage";

import PopUp from "../Layouts/PopUp/PopUp";
import { LoginModal } from "../modals/LoginModal";
import { SignUpModal } from "../modals/SignUpModal";
import Navbar from "./Navbar";


const Header = () => {

const token = getToken()
  const [isLogin,setLogin]= useState(false)
  const [isAdmin,setAdmin]= useState(false)

  const permission = () =>{
    if(token){
      let permissions = getUserData()
     if (permissions.permissions === 'admin') {
      setAdmin(true) 
     }
     
    }
   } 


  useEffect( ()=>{
    permission()
    if(token){
      setLogin(true)
    }
},[isLogin])


  const handleLogOut = ()=>{
    forLogout()
    setLogin(false)
    setAdmin(false)
  }
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
          {!isLogin && <LoginModal setLogin={setLogin}> Login </LoginModal>}
          {!isLogin && <SignUpModal setLogin={setLogin}>Sign Up</SignUpModal>}
          {isLogin && <button onClick={handleLogOut}>Log out</button>}
       
        </div>

        <PopUp
          modal={"modal-1"}
          icon={"bars"}
          className={"modal"}
          style={{ color: "red" }}
          
        >
          <div className="col left pad">
          <NavLink to={'/profile'} className="pad">Profile</NavLink>
            {isAdmin && <NavLink to={'/admin'} className="pad">Admin</NavLink> }
          </div>
        </PopUp>


      </div>
    </div>
  );
};

export default Header;
