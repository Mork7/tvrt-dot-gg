import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RankedTile from "./RankedTile";
import SummonerNameTile from "./SummonerNameTile";
import { commonProfileTileStyles } from "../commonProfileTileStyles";

const backColor = "#212422";

export default function ProfileTile() {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "425px", // this will be set dynamically according to summoner name length. There is a max char limit for names I just don't know it yet.
        backgroundColor: backColor,
        margin: "10px 10px auto ",
        display: "flex",
        flexDirection: "column",
        // Apply styles for smaller screens using @media query
        ...commonProfileTileStyles.smallScreenStyles,
      }}
    >
      <SummonerNameTile />
      <hr style={{ width: "100%", marginBottom: "0px" }} />
      <RankedTile />
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{ justifyContent: "center", margin: "auto", marginBottom: "10px" }}
      >
        <Button>Update</Button>
        <Button>Tier Graph</Button>
      </ButtonGroup>
    </Paper>
  );
}
