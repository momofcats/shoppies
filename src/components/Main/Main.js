import React from "react" ;
import './Main.css';
import Results from "../Results/Results";
import Nominations from "../Nominations/Nominations";

function Main() {
    return (
        <section className="main">
            <Results />
            <Nominations />
        </section>
    )
}

export default Main;