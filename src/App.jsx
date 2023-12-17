// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";

function App() {
  return (
    <div style={{ height: "100vh", backgroundImage: "url('https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D')" }}>
      <SearchBar />
      <ResultsTable />
    </div>
  );
}

export default App;
