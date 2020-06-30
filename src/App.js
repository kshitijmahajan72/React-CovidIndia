import React from 'react';
import './App.css';
import FetchData from './Components/FetchData';

function App() {
  return (
    <div className="App">
      <h1>CoVID-19 Cases India</h1>
      
      <FetchData/>
    </div>
  );
}

export default App;
