import logo from './logo.svg';
import './App.css';
import React from 'react';
import OpenAIComponent from './OpenAIComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenAI React App</h1>
        <OpenAIComponent />
      </header>
    </div>
  );
}

export default App;
