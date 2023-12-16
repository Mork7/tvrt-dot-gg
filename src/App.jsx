// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <div style={{ height: "100vh", backgroundImage: "url('/background.jpg')" }}>
      <SearchBar />
      <ResultsTable />
    </div>
  );
}

export default App;
