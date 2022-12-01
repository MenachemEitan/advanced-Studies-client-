import React from "react";
import Button from "../Button/Button";
import "./SearchBar.css";

const SearchBar = ({ onClick, setPetFilter }) => {
  return (
    <div className="search-bar-container">
      <Button
        style={{ color: "white" }}
        icon={"search"}
        className="search-bar-btn"
        onClick={onClick}
      ></Button>
      <input
        className="search-bar"
        onChange={(e) => {
          setPetFilter(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
