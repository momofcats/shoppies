import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Results/>
      
    </div>
  );
}

export default App;
