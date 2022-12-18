import { useEffect, useState } from "react";
import axios from "axios";
import "../componentStyle/login.css";
import { storeToken, storeUserData } from "../auth/localStorage";
import { PostAuth } from "../axiosController";
import Button from "../Layouts/Button/Button";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const inputUserName = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const userData = {
    email: email,
    password: password,
  };

  const handelSubmit = async () => {
    const post = await PostAuth("users/login", userData);
    if (post.length != 0) {
      setError(post);
    } else {
      window.location.reload();
      // props.handleLoginModal();
      // props.setLogin(true);
    }
  };

  const renderError = () => {
    const returnValue = [];

    if (error.length != 0) {
      error.map((err) => {
        returnValue.push(<h3>{err}</h3>);
      });
      return returnValue;
    } else {
      return;
    }
  };

  return (
    <div className="loginModal">
      <div className="loginContent">
        <div className="loginTitle ">
          <h3>Login</h3>
        </div>
        <div className="loginContainer">
          <input
            className="loginInputs"
            type="text"
            placeholder="Email"
            onChange={inputUserName}
          />
          <input
            className="loginInputs"
            placeholder="Password"
            onChange={inputPassword}
          />
        </div>
        <div className="loginButtons">
          <Button
            icon={"times"}
            className="closeBtn"
            onClick={props.handleLoginModal}
          ></Button>
          <button className="btn black " onClick={handelSubmit}>
            Login
          </button>
        </div>
        <div className="errorUser">
          {/* {<h3>{renderError()}</h3>} */}

          {renderError()}
        </div>
      </div>
    </div>
  );
};
