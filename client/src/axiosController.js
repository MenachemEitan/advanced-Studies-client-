import axios from "axios";
import { storeToken, storeUserData } from "./auth/localStorage";

export const baseUrl = "http://localhost:4000";

export const PostAuth = async (url, data) => {
  console.log("url", url);
  const returnValue = [];

  await axios
    .post(`${baseUrl}/${url}`, data)
    .then((data) => {
      storeToken(data.data.data[0]);
      storeUserData(data.data.data[1]);
    })
    .catch((err) => {
      returnValue.push(...err.response.data.message);
    });
  console.log("returnValue", returnValue);
  return returnValue;
};
