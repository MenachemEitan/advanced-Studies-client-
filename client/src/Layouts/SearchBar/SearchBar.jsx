import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./SearchBar.css";

const SearchBar = ({ onClick, setPetFilter }) => {
  return (
    <div className="search-bar-container">
      <button className="search-bar-btn">
        <Icon Icon={"search"} size={"fa-lg"}></Icon>
      </button>
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
