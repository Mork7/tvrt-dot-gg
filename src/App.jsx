// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";

function App() {
  return (
      <div style={{ backgroundColor: "#242b42", height: "100%" }}>
        <SearchBar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
          }}
        >
          <ProfileTile />
          <ResultsTable />
        </div>
      </div>
  );
}

export default App;
