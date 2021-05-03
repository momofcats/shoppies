import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar">
      <h4 className="searchBar__title">Movie title</h4>
      <form>
        <div className="searchBar__container">
          <button className="searchBar__btn">
            <SearchIcon />
          </button>
          <input className="searchBar__input"></input>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
