import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./SearchBar.css";

const SearchBar = ({
  setSearchInput,
  searchInput,
  onSearch,
  setToggledResult,
}) => {
  let timer;
  const debounce = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onSearch(searchInput);
    }, 1000);
    setToggledResult(true);
  };

  return (
    <div className="search-bar-container">
      <form role="form">
        <div className="form-group">
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyUp={(e) => {
              debounce(e.target.value);
            }}
            type="text"
            className="form-control empty"
            id="iconified"
          ></input>

          <i
            className="fal fa-search  fa-2x search-icon"
            onClick={() => {
              onSearch(searchInput);
            }}
          ></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
