import axios from "axios";
import { useContext, useState } from "react";
import { baseUrl } from "../axiosController";
import { UserContext } from "../context/UserContext";

const useClass = () => {
  const [currntClass, setCurrntClass] = useState("");
  const [toggledClass, setToggledClass] = useState(false);
  const context = useContext(UserContext);

  const choseClass = async (id, classesList) => {
    const token = localStorage.getItem("Token");

    if (token) {
      try {
        const resp = await axios.post(
          `${baseUrl}/class/login/startClass`,
          {
            classId: id,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const currntClass = resp?.data?.data[0];
        setCurrntClass(currntClass);

        setToggledClass(!toggledClass);
        context.getUser();
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const resp = await axios.post(`${baseUrl}/class/notLogin/startClass`, {
          classId: id,
        });
        const currntClass = resp?.data?.data[0];

        setCurrntClass(currntClass);
        setToggledClass(!toggledClass);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { choseClass, currntClass, toggledClass, setToggledClass };
};

export default useClass;
