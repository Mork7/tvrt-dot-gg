import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";
import { getPlayerRank } from "./utils/getPlayerApi";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import MostPlayed from "./components/MostPlayedTile";

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
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await getPlayerRank("Morkster", "TVRT");
        setCurrentPlayer(playerData);
        setIsLoading(false);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    /* this is the container for the entire app */
    <Box
      sx={{
        background: "radial-gradient(circle, #333333, #242b42)",
        height: "100%",
        width: "100%",

      }}
    >
      <SearchBar />
      <Box // this is the container for the app body
        sx={{
          ...responsiveSettings,
          marginTop: "100px", // this is the height of the fixed app bar, this is here so the top of the content of the page isnt behind the app bar and can be seen.
        }}
      >
        {!isLoading ? (
          <Box sx={{display: "flex", flexDirection: "column", marginBottom: "auto"}}>
            <ProfileTile {...currentPlayer} />{" "}
            <MostPlayed mostPlayedChamps={currentPlayer[0].champsUsed} />
          </Box>
        ) : (
          <CircularProgress sx={{ margin: "auto", color: "grey" }} />
        )}
        <ResultsTable />
      </Box>
    </Box>
  );
}

export default App;
