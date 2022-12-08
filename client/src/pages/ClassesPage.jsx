import React from "react";
import Classes from "../components/Classes";
import MyClasses from "../components/MyClasses";
import PopularClasses from "../components/PopularClasses";
import SearchBar from "../Layouts/SearchBar/SearchBar";
import { classesList } from "../mookData";

const ClassesPage = () => {
  return (
    <div className="classes-page page-top-pad">
      <div className="classes-page-section col pad">
        <h3 className="col pad">
          <b>
            <div style={{ fontFamily: "Helvetica" }}>Search</div>
            <div>Classes</div>
          </b>
        </h3>
        <SearchBar />

        <MyClasses classesList={classesList} />
        <PopularClasses classesList={classesList} />
      </div>
    </div>
  );
};

export default ClassesPage;
