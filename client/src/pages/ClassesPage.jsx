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
  const [popClasses, setPopClasses] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchClasses, setSearchClasses] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getPopularClasses();
  }, []);

  const getPopularClasses = async () => {
    if (!popClasses.length) {
      const temp = await axios.get(`${baseUrl}/class/popularClass/get`);
      setPopClasses(temp.data.data);
    }
  };

  const onSearch = async () => {
    setLoader(true);
    try {
      const response = await axios.get(
        `${baseUrl}/class/search/get/?text=${searchInput}`
      );
      setSearchClasses(response);
      console.log(searchClasses);
    } catch (err) {
      console.log(err);
    }
    setTimeout(
      function () {
        setLoader(false);
      },
      [2000]
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
            />
            <button className="btn black" onClick={onSearch}>
              search
            </button>

            <Search searchClasses={searchClasses}></Search>
            <PopularClasses popClasses={popClasses} choseClass={choseClass} />
          </>
        )}
      </div>
    </div>
  );
};

export default ClassesPage;
