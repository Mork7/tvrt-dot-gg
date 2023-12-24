import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";
import { getPlayerRank } from "./utils/getPlayerApi";
import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import MostPlayed from "./components/MostPlayedTile";
import { commonSmallScreenStyles } from './utils/commonSmallScreenStyles';

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
  const [searchParams, setSearchParams] = useState({
    summonerName: "",
    tagLine: "",
  });

  const handleSearch = ({ summonerName, tagLine }) => {
    setSearchParams({ summonerName, tagLine });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { summonerName, tagLine } = searchParams;
        if (summonerName && tagLine) {
          const playerData = await getPlayerRank(summonerName, tagLine, "na");
          setCurrentPlayer(playerData);
          console.log(playerData);
          setIsLoading(false);
        }
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    /* this is the container for the entire app */
    <Box
      sx={{
        background: "radial-gradient(circle, #333333, #242b42)",
        height: "100%",
        width: "100%",
      }}
    >
      <SearchBar onSearch={handleSearch} />
      <Box // this is the container for the app body
        sx={{
          ...responsiveSettings,
          marginTop: "100px", // this is the height of the fixed app bar, this is here so the top of the content of the page isnt behind the app bar and can be seen.
        }}
      >
        {!isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "auto",
            }}
          >
            <ProfileTile {...currentPlayer} />{" "}
            <MostPlayed mostPlayedChamps={currentPlayer[0].champsUsed} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "25px"
            }}
          >
            <Typography sx={{ alignContent: "center", color: commonSmallScreenStyles.fontColor}}>
              Searching for summoner... If you haven&apos;t input the Summoner Name
              and Tag Line please do so and hit search!
            </Typography>

            <CircularProgress sx={{ margin: "auto", color: "grey" }} />
          </Box>
        )}
        <ResultsTable />
      </Box>
    </Box>
  );
}

export default App;
