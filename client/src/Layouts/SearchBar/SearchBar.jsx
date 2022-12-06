import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./SearchBar.css";

const SearchBar = ({ onClick, setPetFilter }) => {
  return (
    <div className="search-bar-container">
      <form role="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control empty"
            id="iconified"
            // placeholder="search"
          ></input>
          {/* <i className="fas fa-search search-icon fa-2x"></i> */}
          <i className="fal fa-search  fa-2x search-icon"></i>
        </div>
      </form>
      {/* <button className="search-bar-btn">
      <Icon Icon={"search"} size={"fa-lg"}></Icon>
      </button>
      <input
        className="search-bar"
        onChange={(e) => {
          setPetFilter(e.target.value);
        }}
      ></input> */}
    </div>
  );
};

export default SearchBar;
