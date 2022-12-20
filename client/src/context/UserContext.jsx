import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../axiosController";
import ClassPage from "../pages/ClassPage";
// import {
//   storeIsLoggedIn,
//   storeLogin,
//   storeLogout,
//   checkTokenExpiration,
// } from "../Auth/user";
// import { fetchUrl } from "../Lib/axios";

export const UserContext = createContext(null);

const Provider = UserContext.Provider;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
    setUser(JSON.parse(localStorage.getItem("personObject")));

    getUser();
  }, []);

  const getUser = async () => {
    try {
      const resp = await axios.get(`${baseUrl}/users/getme`, {
        headers: {
          Authorization: token,
        },
      });

      setUser(resp?.data?.data);
      console.log(resp);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    user,
    token,
    getUser,
  };

  return <Provider value={value}>{children}</Provider>;
};
