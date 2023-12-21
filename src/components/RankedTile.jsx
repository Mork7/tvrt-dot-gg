import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { commonProfileTileStyles } from '../commonProfileTileStyles';

export default function RankedTile() {
  return (
    <Box
      sx={{
        display: "flex",
        ...commonProfileTileStyles.smallScreenStyles,
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
          color: commonProfileTileStyles.fontColor,
          fontWeight: 800,
          marginTop: "25px",
          padding: "10px",
          "@media (max-width: 808px)": {
            margin: "0 0 0 0",
          },
        }}
      >
        Emerald 3 {/* This will eventually be dynamically set */}
        <Typography sx={{ fontSize: 10, paddingLeft: "40%" }}>63 LP</Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ...commonProfileTileStyles.smallScreenStyles,
          paddingRight: "20px",
        }}
      >
        <Typography
          sx={{
            margin: "40px 0 0 10px",
            color: commonProfileTileStyles.fontColor,
            "@media (max-width: 808px)": {
              margin: "5px 0 0 0",
            },
          }}
        >
          201W 188L {/* This will eventually be dynamically set */}
        </Typography>
        <Typography
          sx={{
            color: commonProfileTileStyles.fontColor,
            fontSize: 10,
            marginLeft: "10px",
            "@media (max-width: 808px)": {
              margin: "5px 0 5px 0",
            },
          }}
        >
          Win Rate 52% {/* This will eventually be dynamically set */}
        </Typography>
      </Box>
    </Box>
  );
}
