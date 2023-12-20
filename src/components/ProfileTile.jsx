import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const fontColor = "#d5d6db";
const backColor = "#212422";

const smallScreenStyles = {
  "@media (max-width: 808px)": {
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    width: "auto",
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
};

export default function ProfileTile() {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "500px",
        backgroundColor: backColor,
        margin: "10px 10px auto ",
        display: "flex",
        flexDirection: "column",
        // Apply styles for smaller screens using @media query
        ...smallScreenStyles,
      }}
    >
      <Box
        component="section"
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "row",
          ...smallScreenStyles,
        }}
      >
        <img
          src="./profileIcon665.webp"
          style={{
            height: "100px",
            width: "100px",
            zIndex: 1, // Set zIndex to bring the img to the front
            marginTop: "10px",
            marginLeft: "10px",
            borderRadius: "20%",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: fontColor,
            padding: "10px",
            margin: "10px 10px",
            fontWeight: 1000,
            ...smallScreenStyles,
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
      <Box sx={{ display: "flex", ...smallScreenStyles, justifyContent: "space-between" }}>
        <img src="./emerald.webp" alt="rank" style={{ width: "130px", }}/>
        <Typography
          variant="h5"
          sx={{
            justifyContent: "center",
            color: fontColor,
            fontWeight: 800,
            marginTop: "25px",
            padding: "10px",
            "@media (max-width: 808px)": {
              margin: "0 0 0 0",
            },
          }}
        >
          Emerald 3 {/* This will eventually be dynamically set */}
          <Typography sx={{fontSize: 10, paddingLeft: "40%"}}>
            39 LP
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ...smallScreenStyles,
            paddingRight: "20px"
          }}
        >
          <Typography
            sx={{
              margin: "40px 0 0 10px",
              color: fontColor,
              "@media (max-width: 808px)": {
                margin: "5px 0 0 0",
              },
            }}
          >
            200W 188L {/* This will eventually be dynamically set */}
          </Typography>
          <Typography
            sx={{
              color: fontColor,
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
