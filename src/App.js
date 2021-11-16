import React from 'react';
import SearchForm from './components/searchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm/>
        {/* <button onClick={()=>{
              console.log(ipcRenderer)
              window.api.fetchUserProfile("juanse_sierra");
          }}>Buscar</button> */}
      </header>
    </div>
  );
}

export default App;
