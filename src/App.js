import React from 'react';
import logo from './logo.svg';
import './App.css';
const { ipcRenderer } = window;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>{
              console.log(ipcRenderer)
              window.api.fetchUserProfile("juanse_sierra");
          }}>Buscar</button>
      </header>
    </div>
  );
}

export default App;
