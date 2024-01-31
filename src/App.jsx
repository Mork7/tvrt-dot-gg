import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ChampionTable from "./components/ChampionTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";
import { getPlayerRank } from "./utils/leagueApi";
import { useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import MostPlayed from "./components/MostPlayedTile";
import { commonSmallScreenStyles } from "./utils/commonSmallScreenStyles";
import Streams from "./components/Streams";
import Footer from "./components/Footer";
import ContactScreen from "./components/ContactScreen";
import AboutScreen from "./components/AboutScreen";

const responsiveSettings = {
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",
  justifyContent: "center",
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
    region: "na",
  });
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isAboutClicked, setIsAboutClicked] = useState(false);

  const handleSearch = ({ summonerName, tagLine, region }) => {
    setSearchParams({ summonerName, tagLine, region });
  };

  const handleContactClick = () => {
    setIsContactClicked(true);
    setIsAboutClicked(false)
  };

  const handleAboutClick = () => {
    setIsAboutClicked(true);
    setIsContactClicked(false)
  };

  const handleHomeClick = () => {
    setIsAboutClicked(false);
    setIsContactClicked(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { summonerName, tagLine, region } = searchParams;
        if (summonerName && tagLine && region) {
          const playerData = await getPlayerRank(summonerName, tagLine, region);
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
        height: "auto",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <SearchBar onSearch={handleSearch} />

      {isContactClicked && <ContactScreen />}
      {isAboutClicked && <AboutScreen />} 

      {(!isContactClicked && !isAboutClicked) && (
        <Box // this is the container for the app body
          sx={{
            ...responsiveSettings,
            justifyContent: "space-evenly",
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
              <ProfileTile {...currentPlayer} region={searchParams.region} />
              <MostPlayed mostPlayedChamps={currentPlayer[0].champsUsed} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "25px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: commonSmallScreenStyles.fontColor,
                }}
              >
                Searching for summoner... If you haven&apos;t input the Summoner
                Name and Tag Line please do so and hit search! <br />
                {searchParams.summonerName !== "" && (
                  <CircularProgress sx={{ margin: "auto", color: "grey" }} />
                )}
              </Typography>
            </Box>
          )}
          <ChampionTable />
          <Streams />
        </Box>
      )}
      <Footer onContactClick={handleContactClick} onAboutClick={handleAboutClick} onHomeClick={handleHomeClick} />
    </Box>
  );
}

export default App;
