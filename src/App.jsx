// import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";
// import { useState } from "react";

const responsiveSettings = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "@media (max-width: 808px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

function App() {
  // const [ currentPlayer, setCurrentPlayer ] = useState();

  return (
    /* this is the container for the entire app */
    <Box
      sx={{
        background: "radial-gradient(circle, #333333, #242b42)",
        height: "100%",
        width: "100%"
      }}
    >
      <SearchBar />
      <Box // this is the container for the app body
        sx={{
          ...responsiveSettings,
          marginTop: "100px", // this is the height of the fixed app bar, this is here so the top of the content of the page isnt behind the app bar and can be seen.
        }}
      >
        <ProfileTile />
        <ResultsTable />
      </Box>
    </Box>
  );
}

export default App;
