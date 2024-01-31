import Paper from "@mui/material/Paper";
import RankedTile from "./RankedTile";
import SummonerNameTile from "./SummonerNameTile";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";
// import { useEffect, useState } from "react";

export default function ProfileTile(currentPlayer) {
  return (
    <Paper
      id={"hover-effect"}
      sx={{
        height: "100%",
        width: "auto", // this will be set dynamically according to summoner name length. There is a max char limit for names I just don't know it yet.
        backgroundColor: "#212422",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        // Apply styles for smaller screens using @media query
        ...commonSmallScreenStyles.smallScreenStyles,
      }}
    >
      <SummonerNameTile {...currentPlayer} />
      <hr style={{ width: "100%", marginBottom: "0px" }} />
      <RankedTile {...currentPlayer} />
    </Paper>
  );
}
