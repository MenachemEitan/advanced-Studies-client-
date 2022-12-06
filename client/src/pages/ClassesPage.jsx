import React from "react";
import Classes from "../components/Classes";
import MyClasses from "../components/MyClasses";
import PopularClasses from "../components/PopularClasses";
import SearchBar from "../Layouts/SearchBar/SearchBar";

const ClassesPage = () => {
  return (
    <div className="classes-page pad">
      <div className="classes-page-section col pad">
        <h3 className="col pad">
          <b>
            <div style={{ fontFamily: "Helvetica" }}>Search</div>
            <div>Classes</div>
          </b>
        </h3>
        <SearchBar />

        <MyClasses />
        <PopularClasses />
      </div>
    </div>
  );
};

export default ClassesPage;
