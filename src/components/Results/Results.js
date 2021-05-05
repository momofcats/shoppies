import React from "react";
import "./Results.css";

function Results({ movies, keyword, nominate}) {
function handleClick(item) {
    nominate(item);
}
    return (
        <div className="results">
            <h4 className="results__title">
                Results for "{keyword}"
            </h4>
            <ul className="results__list">
                {movies.map((item) => {
                   return <li className="results__item" key={item.imdbID}>{item.Title} ({item.Year})
                   <button type="button" className="results__btn" onClick={() => handleClick(item)}>Nominate</button>
                   </li>
                })}
            </ul>
        </div>
    )

}
export default Results; 