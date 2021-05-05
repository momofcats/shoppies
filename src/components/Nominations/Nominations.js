import React from "react";
import '../Results/Results.css';
// const nominations = [
//     {title:"Rambo", year: "1999", imbdID: "tt0222012"}, 
//     {title: "Hey Ram", year: "2000", imbdID: "tt0222013"}, 
//     {title: "Ram Dass Going Home", year: "2017", imbdID: "tt0222011"}
// ];
function Nominations({nominations, onRemoveClick}) {
    function handleClick(item) {
        onRemoveClick(item);
    }
    return (
        <div className="results">
        <h4 className="results__title">
            Nominations
        </h4>
        <ul className="results__list">
            {nominations.map((item) => {
               return <li className="results__item" key={item.imdbID}>{item.Title} ({item.Year})
               <button className="results__btn" onClick={()=>handleClick(item)}>Remove</button>
               </li>
            })}
        </ul>
    </div>
    )
}

export default Nominations;