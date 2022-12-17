import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  }, []);

  const value = {
    user,
    token,
  };

  return <Provider value={value}>{children}</Provider>;
};
