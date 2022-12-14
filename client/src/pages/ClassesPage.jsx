import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../axiosController";
import PopularClasses from "../components/PopularClasses";
import Search from "../components/Search";
import useClass from "../Hooks/useClass";
import SearchBar from "../Layouts/SearchBar/SearchBar";
import ClassPage from "./ClassPage";

const ClassesPage = () => {
  const { choseClass, currntClass, toggledClass, setToggledClass } = useClass();

  const [searchInput, setSearchInput] = useState("");
  const [searchClasses, setSearchClasses] = useState([]);
  const [loader, setLoader] = useState(false);
  const [toggledResult, setToggledResult] = useState(false);

  const onSearch = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        `${baseUrl}/class/search/get/?text=${searchInput}`
      );
      setSearchClasses(response);
    } catch (err) {
      console.log(err);
    }
    setTimeout(
      function () {
        setLoader(false);
      },
      [500]
    );
  };

  return (
    <div className="classes-page page-top-pad fade-in">
      {loader && <span class="loader"></span>}
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
            <SearchBar
              setSearchInput={setSearchInput}
              searchInput={searchInput}
              onSearch={onSearch}
              setToggledResult={setToggledResult}
            />
            {toggledResult ? (
              <Search
                searchClasses={searchClasses}
                choseClass={choseClass}
                currntClass={currntClass}
              ></Search>
            ) : (
              <PopularClasses
                // popClasses={popClasses}
                choseClass={choseClass}
                currntClass={currntClass}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ClassesPage;
