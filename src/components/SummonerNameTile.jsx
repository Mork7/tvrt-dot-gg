import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function SummonerNameTile(currentPlayerData) {
  const currentPlayer = currentPlayerData[0];

  useEffect(() => {
    if (currentPlayer && currentPlayerData[0]) {
      const summonerNameArray = currentPlayer.username.split("-");
      setSummonerName(
        summonerNameArray[0][0].toLocaleUpperCase() +
          summonerNameArray[0].substring(1)
      );
      setTagLine(summonerNameArray[1].toUpperCase());
      setPastRanks(currentPlayer.pastRanks);
    }
  }, [currentPlayer, currentPlayerData]);

  // Initialize the state with an empty string if currentPlayer is not available
  const initialSummonerName =
    currentPlayer && currentPlayerData[0] ? currentPlayer.username : "";
  const [summonerName, setSummonerName] = useState(initialSummonerName);

  const initialTagLine =
    currentPlayer && currentPlayerData[0] ? currentPlayer.username : "";
  const [tagLine, setTagLine] = useState(initialTagLine);

  const initialPastRanks =
    currentPlayer && currentPlayerData[0] ? currentPlayer.pastRanks : [];
  const [pastRanks, setPastRanks] = useState(initialPastRanks);

  if (!currentPlayer || !summonerName || !pastRanks) {
    return null; // or return a loading state
  }

  return (
    <Box
      id="summoner-name-container"
      component="section"
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...commonSmallScreenStyles.smallScreenStyles,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          marginTop: "10px",
          "@media (max-width: 808px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {pastRanks.map((pastRank) => (
          <Chip label={pastRank} variant="outlined" key={pastRank} />
        ))}
      </Stack>
      <Typography
        id="summoner-name"
        variant="h5"
        sx={{
          color: commonSmallScreenStyles.fontColor,
          padding: "10px",
          margin: "10px 10px",
          fontWeight: 1000,
          ...commonSmallScreenStyles.smallScreenStyles,
        }}
      >
        {summonerName}
      </Typography>
      <Typography
        id="tag-line"
        variant="h5"
        sx={{
          color: "grey",
          padding: "10px",
          margin: "10px 10px",
          fontWeight: 900,
          ...commonSmallScreenStyles.smallScreenStyles,
          "@media (max-width: 808px)": {
            padding: "0",
            margin: "0",
          },
        }}
      >
        {"#" + tagLine}
      </Typography>
    </Box>
  );
}
