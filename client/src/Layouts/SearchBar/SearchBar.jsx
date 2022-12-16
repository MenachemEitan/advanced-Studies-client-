import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./SearchBar.css";

const SearchBar = ({ setSearchInput, searchInput }) => {
  console.log(searchInput);
  return (
    <div className="search-bar-container">
      <form role="form">
        <div className="form-group">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="text"
            className="form-control empty"
            id="iconified"
          ></input>
          <i className="fal fa-search  fa-2x search-icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
