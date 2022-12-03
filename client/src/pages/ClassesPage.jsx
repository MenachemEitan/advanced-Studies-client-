import React from "react";
import Classes from "../components/Classes";
import SearchBar from "../Layouts/SearchBar/SearchBar";

const ClassesPage = () => {
  return (
    <div className="classes-page pad">
      <div className="classes-page-section col pad">
        <h2 className="col">
          <div>Search</div>
          <div>Classes</div>
        </h2>
        <SearchBar />

        <Classes />
        <Classes />
      </div>
    </div>
  );
};

export default ClassesPage;
