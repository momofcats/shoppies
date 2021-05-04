import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Nominations from '../Nominations/Nominations';
import Main from "../Main/Main";


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
