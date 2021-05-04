import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

function SearchBar(props) {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(value);
  }

  function handleChange(e) {
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
          <input className="searchBar__input" onChange={handleChange}></input>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
