// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";

const responsiveSettings = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Stack components in a column on smaller screens
  "@media (min-width: 790px)": {
    flexDirection: "row", // Display components in a row on larger screens
    alignItems: "center",
  },
};

function App() {
  return (
    <div style={{ backgroundColor: "#242b42", height: "100%" }}>
      <SearchBar />
      <Box
        sx={{
          ...responsiveSettings,
        }}
      >
        <ProfileTile />
        <ResultsTable />
      </Box>
    </div>
  );
}

export default App;
