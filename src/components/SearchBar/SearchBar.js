import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

function SearchBar({ onSearch, message, handleErrorMessage}) {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  function handleChange(e) {
    handleErrorMessage();
    setValue(e.target.value);
  }

  return (
    <div className="searchBar">
      <h4 className="searchBar__title">Movie title</h4>
      <form onSubmit={handleSubmit}>
        <div className="searchBar__container">
          <button className="searchBar__btn">
            <SearchIcon />
          </button>
          <input className="searchBar__input" onChange={handleChange} placeholder="Search movies..."></input>
        </div>
      </form>
      <div className="searchBar__error">{message}</div>
    </div>
  );
}

export default SearchBar;
