import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useEffect, useState } from 'react'
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";

export default function RankedTile(currentPlayer) {

  useEffect(() => {
    if (currentPlayer && currentPlayer[0]) {
      setRank(currentPlayer[0].rank);
      setWinLossRatio(currentPlayer[0].winLossRatio);
      setWinPercentage(currentPlayer[0].winPercentage);
    }
  }, [currentPlayer]);

  // Initialize the state with an empty string if currentPlayer is not available
  const initialRank =
    currentPlayer && currentPlayer[0] ? currentPlayer[0].rank : "";
  const [rank, setRank] = useState(initialRank);

  const initialWinLoss = 
  currentPlayer && currentPlayer[0] ? currentPlayer[0].winLossRatio : "";
  const [ winLossRatio, setWinLossRatio ] = useState(initialWinLoss);

  const initialWinPercentage = 
  currentPlayer && currentPlayer[0] ? currentPlayer[0].winPercentage : "";
  const [ winPercentage, setWinPercentage ] = useState(initialWinPercentage);

  return (
    <Box
      sx={{
        display: "flex",
        ...commonSmallScreenStyles.smallScreenStyles,
        justifyContent: "space-between",
      }}
    >
      <img
        src="./emerald.webp"
        alt="rank"
        style={{ width: window.innerWidth <= 808 ? "115px" : "130px" }}
      />
      <Typography
        variant="h5"
        sx={{
          justifyContent: "center",
          color: commonSmallScreenStyles.fontColor,
          fontWeight: 800,
          marginTop: "25px",
          padding: "10px",
          "@media (max-width: 808px)": {
            margin: "0 0 0 0",
          },
        }}
      >
        {rank}
        <Typography sx={{ fontSize: 10, paddingLeft: "40%" }}>63 LP</Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ...commonSmallScreenStyles.smallScreenStyles,
          paddingRight: "20px",
        }}
      >
        <Typography
          sx={{
            margin: "40px 0 0 10px",
            color: commonSmallScreenStyles.fontColor,
            "@media (max-width: 808px)": {
              margin: "5px 0 0 0",
            },
          }}
        >
          {winLossRatio}
        </Typography>
        <Typography
          sx={{
            color: commonSmallScreenStyles.fontColor,
            fontSize: 10,
            marginLeft: "10px",
            "@media (max-width: 808px)": {
              margin: "5px 0 5px 0",
            },
          }}
        >
          {winPercentage}
        </Typography>
      </Box>
    </Box>
  );
}
