import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import omdbApi from "../../utils/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Filter out dublicates from api data 
  function removeDublicates(arr) {
    const filteredArr = arr.reduce((acc, current) => {
      const x = acc.find(item => item.imdbID === current.imdbID);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return filteredArr;
  }

  function handleMovieSearch(title) {
    setErrorMessage("");
    setKeyword(title);
    omdbApi
      .searchMovies(title)
      .then((res) => {
        if(res.Error) {
          setErrorMessage(res.Error);
          setMovies([]);
          console.log(res.Error);
        } else {
          const data = res.Search;
          setMovies(removeDublicates(data));
          console.log(removeDublicates(data));
        }
       
      })
      .catch((err) => console.log(err));
  }

  function nominate(movie) {
    console.log(movie);
    setNominations([...nominations, movie]);

  }
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleMovieSearch} message={errorMessage} handleErrorMessage={() => setErrorMessage("")}/>
      <Main movies={movies} keyword={keyword} nominate={nominate} nominations={nominations}/>
    </div>
  );
}

export default App;
