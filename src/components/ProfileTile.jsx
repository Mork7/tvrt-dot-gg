import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const fontColor = "#d5d6db";
const backColor = "#212422";

export default function ProfileTile() {
  return (
    <Paper
      sx={{
        height: "400px",
        width: "500px",
        backgroundColor: backColor,
        margin: "10px 10px auto ",
        display: "flex",
        flexDirection: "column",
        // background: `radial-gradient(circle, #343636, ${backColor})`
      }}
    >
      <Box
        component="section"
        sx={{ p: 0, display: "flex", flexDirection: "row" }}
      >
        <img
          src="./profileIcon665.webp"
          style={{
            height: "120px",
            width: "120px",
            backgroundColor: "blue",
            zIndex: 1, // Set zIndex to bring the div to the front
            margin: "10px 0 0 10px",
            borderRadius: "20%",
          }}
        ></img>
        <Typography
          variant="h5"
          sx={{
            color: fontColor,
            padding: "10px",
            margin: "10px 10px",
            fontWeight: 1000,
          }}
        >
          Morkster #TVRT
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          paddingTop: "15px",
          paddingBottom: "10px",
          borderBottom: "1px solid #34333d",
          color: "#d5d6db",
        }}
      >
        &nbsp;&nbsp;Ranked Solo
      </Typography>
      <Box sx={{ display: "flex", marginLeft: "5px"}}>
        <img src="./emerald.webp" alt="rank" style={{ width: "130px" }} />
        <Typography
          variant="h5"
          sx={{
            justifyContent: "center",
            color: fontColor,
            fontWeight: 800,
            marginTop: "25px",
            padding: "10px",
          }}
        >
          Emerald 3
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ margin: "40px 0 0 100px", color: fontColor }}>
            {" "}
            200W 188L
          </Typography>
          <Typography sx={{ color: fontColor, margin: "10px 0 0 100px", fontSize: 10 }}>Win Rate 52%</Typography>
        </Box>
      </Box>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{ justifyContent: "center" }}
      >
        <Button>Update</Button>
        <Button>Tier Graph</Button>
      </ButtonGroup>
    </Paper>
  );
}
