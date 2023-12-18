import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const fontColor = "#d5d6db";

export default function ProfileTile() {
  return (
    <Paper
      sx={{
        height: "400px",
        width: "500px",
        backgroundColor: "#212422",
        margin: "10px 10px auto ",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="section"
        sx={{ p: 0, display: "flex", flexDirection: "row" }}
      >
        <img
          src="./profileIcon665.webp"
          style={{
            height: "150px",
            width: "150px",
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
        &nbsp;&nbsp;Ranked Solo/Duo
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
            padding: "10px"
          }}
        >
          Emerald 3
        </Typography>
        <Typography sx={{margin: "40px 0 0 100px", color: fontColor}}> 200W 188L</Typography>
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
