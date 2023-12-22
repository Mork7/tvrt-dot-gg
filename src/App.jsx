import { useState } from 'react'
import SearchBar from "./components/SearchBar";
import ResultsTable from "./components/ResultsTable";
import ProfileTile from "./components/ProfileTile";
import Box from "@mui/system/Box";
import { getPlayerRank } from "./utils/getPlayerApi";
import { useEffect } from "react";

// 0
// : 
// champsUsed
// : 
// (7) ['Shyvana', 'Nocturne', 'Jarvan IV', 'Illaoi', 'Diana', 'Trundle', 'Garen']
// lp
// : 
// "62"
// pastRanks
// : 
// (3) ['S2023 S1 gold  3', 'S2022 silver  2', 'S7 silver  1']
// rank
// : 
// "Emerald III"
// username
// : 
// "Morkster-TVRT"
// winLossRatio
// : 
// "201 - 190"
// winPercentage
// : 
// "51.41%"

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

  const [ currentPlayer, setCurrentPlayer ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerData = await getPlayerRank('TVRT GWegg', 'NA1');
        // console.log(playerData);
        // Use playerRank data as needed
        setCurrentPlayer(playerData);
        console.log(playerData);
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
        width: "100%"
      }}
    >
      <SearchBar {...currentPlayer}/>
      <Box // this is the container for the app body
        sx={{
          ...responsiveSettings,
          marginTop: "100px", // this is the height of the fixed app bar, this is here so the top of the content of the page isnt behind the app bar and can be seen.
        }}
      >
        <ProfileTile {...currentPlayer} />
        <ResultsTable />
      </Box>
    </Box>
  );
}

export default App;
