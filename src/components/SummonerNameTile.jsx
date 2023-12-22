import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";
import { useState, useEffect } from "react";

export default function SummonerNameTile(currentPlayer) {
  
  useEffect(() => {
    if (currentPlayer && currentPlayer[0]) {
      setUsername(currentPlayer[0].username);
    }
  }, [currentPlayer]);

  // Initialize the state with an empty string if currentPlayer is not available
  const initialUsername =
    currentPlayer && currentPlayer[0] ? currentPlayer[0].username : "";
  const [username, setUsername] = useState(initialUsername);

  return (
    <Box
      id="summoner-name-container"
      component="section"
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "row",
        ...commonSmallScreenStyles.smallScreenStyles,
      }}
    >
      <img
        id="profile-icon"
        src="./profileIcon665.webp"
        style={{
          height: "100px",
          width: "100px",
          zIndex: 1, // Set zIndex to bring the img to the front
          marginTop: "10px",
          marginLeft: window.innerWidth <= 808 ? "0px" : "10px",
          borderRadius: "20%",
        }}
      />
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
        {username}
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
        #TVRT
      </Typography>
    </Box>
  );
}
