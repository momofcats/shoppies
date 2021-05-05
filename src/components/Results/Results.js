import React from "react";
import "./Results.css";

function Results({ movies, keyword, onNominate}) {
function handleClick(item) {
    onNominate(item);
}
    return (
        <div className="results">
            <h4 className="results__title">
                Results for "{keyword}"
            </h4>
            <ul className="results__list">
                {movies.map((item) => {
                   return <li className="results__item" key={item.imdbID}>{item.Title} ({item.Year})
                   <button type="button" className={`results__btn ${item.isNominated ? "results__btn_disabled" : ""}`} onClick={() => handleClick(item)}>Nominate</button>
                   </li>
                })}
            </ul>
        </div>
    )

}
export default Results; 