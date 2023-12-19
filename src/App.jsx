// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";

const responsiveSettings = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "@media (max-width: 790px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

function App() {
  return (
    <Box sx={{ background: "radial-gradient(circle, #333333, #242b42)", height: "100%", "@media (max-width: 412px)": {
      width: "100%",
    },}}>
      <SearchBar />
      <Box
        sx={{
          ...responsiveSettings,
          marginTop: "100px"
        }}
      >
        <ProfileTile />
        <ResultsTable />
      </Box>
    </Box>
  );
}

export default App;
