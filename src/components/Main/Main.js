import React from "react";
import "./Main.css";
import Results from "../Results/Results";
import Nominations from "../Nominations/Nominations";

function Main({ movies, keyword, nominations, onNominate, onRemoveClick }) {
  return (
    <section className="main">
      {movies.length > 0 && (
        <Results movies={movies} keyword={keyword} onNominate={onNominate} />
      )}
      {nominations.length > 0 && (
        <Nominations nominations={nominations} onRemoveClick={onRemoveClick} />
      )}
    </section>
  );
}

export default Main;
