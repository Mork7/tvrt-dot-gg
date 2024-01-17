import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";

function selectRankImage(rank) {
  const imagePathDict = {
    iron: "./iron.webp",
    bronze: "./bronze.webp",
    silver: "./silver.webp",
    gold: "./gold.webp",
    platinum: "./platinum.webp",
    emerald: "./emerald.webp",
    diamond: "./diamond.webp",
    master: "./master.webp",
    grandmaster: "./grandmaster.webp",
    challenger: "./challenger.webp",
  };
  // ex, if a players rank was Iron II, then imagePathDict.Iron would be returned
  switch (true) {
    case rank.toLowerCase().includes("iron"):
      return imagePathDict.iron;
    case rank.toLowerCase().includes("bronze"):
      return imagePathDict.bronze;
    case rank.toLowerCase().includes("silver"):
      return imagePathDict.silver;
    case rank.toLowerCase().includes("gold"):
      return imagePathDict.gold;
    case rank.toLowerCase().includes("platinum"):
      return imagePathDict.platinum;
    case rank.toLowerCase().includes("emerald"):
      return imagePathDict.emerald;
    case rank.toLowerCase().includes("diamond"):
      return imagePathDict.diamond;
    case rank.toLowerCase().includes("master"):
      return imagePathDict.master;
    case rank.toLowerCase().includes("grandmaster"):
      return imagePathDict.grandmaster;
    case rank.toLowerCase().includes("challenger"):
      return imagePathDict.challenger;
    default:
      // Handle cases where no match is found
      return undefined;
  }
}

export default function RankedTile(currentPlayerData) {
  const currentPlayer = currentPlayerData[0];

  useEffect(() => {
    if (currentPlayer) {
      setRank(currentPlayer.rank);
      setWinLossRatio(currentPlayer.winLossRatio);
      setWinPercentage(currentPlayer.winPercentage);
      setLP(currentPlayer.lp);
    }
  }, [currentPlayer]);

  // Initialize the state with an empty string if currentPlayer is not available
  const initialRank =
    currentPlayer && currentPlayerData[0] ? currentPlayer.rank : "";
  const [rank, setRank] = useState(initialRank);

  const initialWinLoss =
    currentPlayer && currentPlayerData[0] ? currentPlayer.winLossRatio : "";
  const [winLossRatio, setWinLossRatio] = useState(initialWinLoss);

  const initialWinPercentage =
    currentPlayer && currentPlayerData[0] ? currentPlayer.winPercentage : "";
  const [winPercentage, setWinPercentage] = useState(initialWinPercentage);

  const initialLP =
    currentPlayer && currentPlayerData[0] ? currentPlayer.lp : "";
  const [LP, setLP] = useState(initialLP);

  if (!currentPlayer) {
    return null; // or return a loading state
  }

  return (
    <Box
      sx={{
        display: "flex",
        ...commonSmallScreenStyles.smallScreenStyles,
        justifyContent: "space-between",
      }}
    >
      <img
        src={selectRankImage(currentPlayer.rank)}
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
        {rank.includes("Challenger") ||
        rank.includes("Master") ||
        rank.includes("GrandMaster") ? (
          rank
        ) : (
          <>
            {rank}
            <Typography sx={{ fontSize: 10, paddingLeft: "40%" }}>
              {LP + " LP"}
            </Typography>
          </>
        )}
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
          {winLossRatio + " W/L"}
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
