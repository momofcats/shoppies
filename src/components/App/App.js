import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import omdbApi from "../../utils/api";


function App() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");

  function handleMovieSearch(title) {
    setKeyword(title);
    omdbApi
      .searchMovies(title)
      .then((res) => {
        const data = res.Search;
        setMovies(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleMovieSearch} />
      <Main movies={movies} keyword={keyword}/>
    </div>
  );
}

export default App;
