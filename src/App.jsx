// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <div style={{ backgroundColor: "#242b42", height: "100%" }}>
      <SearchBar />
      <div style={{ display: "flex", flexDirection: "row" , alignItems: "space-between"}}>
        <div style={{ height: "400px", width: "600px",  backgroundColor: "#212422" }} />
        <ResultsTable />
      </div>
    </div>
  );
}

export default App;
