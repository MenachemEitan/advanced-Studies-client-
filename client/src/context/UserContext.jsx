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

  //   const navigate = useNavigate();
  //   const [isLogin, setIsLogin] = useState(storeIsLoggedIn());
  //   const [user, setUser] = useState();
  //   const [isAdminLogged, setIsAdminLogged] = useState(storeIsLoggedIn());

  //   const setAdmin = () => {
  //     const userPermission = user && user[0].permissionId;

  //     if (!userPermission) {
  //       setIsAdminLogged(true);
  //     } else {
  //       setIsAdminLogged(false);
  //     }
  //   };

  //   useEffect(() => {
  //     const tokenExpiration = checkTokenExpiration();
  //     if (!tokenExpiration) {
  //       logout();
  //     }
  //     if (isLogin) {
  //       fetchUrl("/users/me")
  //         .then((u) => setUser(u.data))
  //         .then(setAdmin)
  //         .catch(setUser());
  //     }
  //   }, [isLogin]);

  //   console.log("user?.permissions", user);
  //   const login = (token) => {
  //     storeLogin(token);
  //     setIsLogin(storeIsLoggedIn());
  //     localStorage.setItem("uId", user[0].id);
  //     navigate("/home");
  //   };

  //   const logout = () => {
  //     storeLogout();
  //     setIsLogin(storeIsLoggedIn());
  //     setIsAdminLogged(false);
  //     setUser();
  //     navigate("/home");
  //   };

  const value = {
    // isLogin,
    // login,
    // logout,
    // user,
    // isLogin,
    // setIsLogin,
    // isAdminLogged,
    user,
    token,
  };

  return <Provider value={value}>{children}</Provider>;
};
