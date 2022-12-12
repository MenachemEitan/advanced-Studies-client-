import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import Classes from "../components/Classes";
import MyClasses from "../components/MyClasses";
import PopularClasses from "../components/PopularClasses";
import { UserContext } from "../context/UserContext";
import useClass from "../Hooks/useClass";
import SearchBar from "../Layouts/SearchBar/SearchBar";
import { classesList } from "../mookData";
import ClassPage from "./ClassPage";

const ClassesPage = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();
  const context = useContext(UserContext);

  const [popClasses, setPopClasses] = useState([]);

  console.log("popClasses", popClasses);

  useEffect(() => {
    getPopularClasses();
  }, []);

  const getPopularClasses = async () => {
    if (!popClasses.length) {
      const temp = await axios.get(`${baseUrl}/class/popularClass/get`);
      setPopClasses(temp.data.data);
    }
  };

  return (
    <div className="classes-page page-top-pad fade-in">
      <div className="classes-page-section col pad">
        {toggledClass ? (
          <>
            <ClassPage
              currntClass={currntClass}
              setToggledClass={setToggledClass}
            />
          </>
        ) : (
          <>
            <h3 className="col pad ">
              <b>
                <div>Search </div>
                <div>Classes</div>
              </b>
            </h3>
            <SearchBar />

            <PopularClasses popClasses={popClasses} choseClass={choseClass} />
          </>
        )}
      </div>
    </div>
  );
};

export default ClassesPage;
