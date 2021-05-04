import React from "react" ;
import './Main.css';
import Results from "../Results/Results";
import Nominations from "../Nominations/Nominations";

function Main({ movies, keyword }) {
    return (
        <section className="main">
            {movies.length > 0 && <Results movies={movies} keyword={keyword}/>}
            <Nominations />
        </section>
    )
}

export default Main;