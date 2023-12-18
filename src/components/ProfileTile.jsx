import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ProfileTile() {
  return (
    <Paper
      sx={{
        height: "400px",
        width: "40rem",
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
            color: "#d5d6db",
            padding: "10px",
            margin: "10px 10px",
            fontWeight: 1000,
          }}
        >
          Morkster #TVRT
        </Typography>
      </Box>
      <Box sx={{border: "1px solid white", display: "flex"}}>
          <img src="./emerald.webp" alt="" />
          <Typography variant="h5" sx={{justifyContent: "center", marginLeft: "auto"}}>
            Emerald 3
          </Typography>
      </Box> 

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{ justifyContent: "center", marginTop: "100px" }}
      >
        <Button>Update</Button>
        <Button>Tier Graph</Button>
      </ButtonGroup>
    </Paper>
  );
}
