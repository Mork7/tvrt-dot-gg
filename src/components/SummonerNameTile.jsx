import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { commonProfileTileStyles } from "../commonProfileTileStyles";

export default function SummonerNameTile() {
  return (
    <Box
      id="summoner-name-container"
      component="section"
      sx={{
        p: 0,
        display: "flex",
        flexDirection: "row",
        ...commonProfileTileStyles.smallScreenStyles,
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
          color: commonProfileTileStyles.fontColor,
          padding: "10px",
          margin: "10px 10px",
          fontWeight: 1000,
          ...commonProfileTileStyles.smallScreenStyles,
        }}
      >
        Morkster
      </Typography>
      <Typography
        id="tag-line"
        variant="h5"
        sx={{
          color: "grey",
          padding: "10px",
          margin: "10px 10px",
          fontWeight: 900,
          ...commonProfileTileStyles.smallScreenStyles,
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
