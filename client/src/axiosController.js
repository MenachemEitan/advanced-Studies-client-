import axios from "axios";
import { storeToken, storeUserData } from "./auth/localStorage";

export const baseUrl = "http://localhost:4000";

export const PostAuth = async (url, data) => {
  const returnValue = [];
  console.log("PostAuth-data =>", data);
  await axios
    .post(`${baseUrl}/${url}`, data)
    .then((data) => {
      console.log("PostAuth-then-data =>", data);
      storeToken(data.data.data[0]);
      storeUserData(data.data.data[1]);
    })
    .catch((err) => {
      console.log("PostAuth-data =>", data);
      // console.log("PostAuth-catch-eror =>", err);
      returnValue.push(...err.response.data.message);
    });

  return returnValue;
};
