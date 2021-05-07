import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import omdbApi from "../../utils/api";
import Banner from "../Banner/Banner";

function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Filter out dublicates from api data
  function removeDublicates(arr) {
    const filteredArr = arr.reduce((acc, current) => {
      const x = acc.find((item) => item.imdbID === current.imdbID);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return filteredArr;
  }

  // finds films that are already nominated
  function findNominatedFilms(arr1, arr2) {
    let map = arr2.reduce((acc, currentVal) => {
      let id = currentVal.imdbID;
      acc[id] = true;
      return acc;
    }, {});
    arr1.map((film) => {
      if (film.imdbID in map) {
        film.isNominated = true;
      } else {
        film.isNominated = false;
      }
      return film;
    });
    return arr1;
  }

  function handleMovieSearch(title) {
    setErrorMessage("");
    setKeyword(title);
    omdbApi
      .searchMovies(title)
      .then((res) => {
        if (res.Error) {
          setErrorMessage(res.Error);
          setMovies([]);
        } else {
          let data = res.Search;
          data = removeDublicates(data);
          const films = findNominatedFilms(data, nominations);
          setMovies(films);
        }
      })
      .catch((err) => setErrorMessage(err));
  }

  function handleNominateClick(movie) {
    movie.isNominated = true;
    setNominations([...nominations, movie]);
    localStorage.setItem(
      "nominatedMovies",
      JSON.stringify([...nominations, movie])
    );
  }

  function handleRemoveClick(movie) {
    const newNominations = nominations.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setNominations(newNominations);
    localStorage.setItem("nominatedMovies", JSON.stringify(newNominations));
    const films = findNominatedFilms(movies, newNominations);
    setMovies(films);
  }

  useEffect(() => {
    const nominatedMovies = JSON.parse(localStorage.getItem("nominatedMovies"));
    if (nominatedMovies) {
      setNominations(nominatedMovies);
    }
  }, []);

  return (
    <div className="App">
      {nominations.length >= 5 && <Banner counter={nominations.length} />}
      <Header />
      <SearchBar
        onSearch={handleMovieSearch}
        message={errorMessage}
        handleErrorMessage={() => setErrorMessage("")}
      />
      <Main
        movies={movies}
        keyword={keyword}
        onNominate={handleNominateClick}
        nominations={nominations}
        onRemoveClick={handleRemoveClick}
      />
    </div>
  );
}

export default App;
