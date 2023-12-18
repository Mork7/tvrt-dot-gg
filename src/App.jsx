// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <div style={{ backgroundColor: "#242b42", height: "100%"}}>
      <SearchBar />
      <ResultsTable />
    </div>
  );
}

export default App;
