import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
      <Typography
        variant="h5"
        sx={{
          color: "#d5d6db",
          margin: "10px 10px",
          borderBottom: "2px solid #d5d6db",
        }}
      >
        Ranked Solo/Duo
      </Typography>
      <div>
        <img
          src="./astro-sloth.jpg"
          style={{
            height: "260px",
            width: "220px",
            backgroundColor: "blue",
            zIndex: 1, // Set zIndex to bring the div to the front
            margin: "10px 0 0 10px",
            borderRadius: "4%",
          }}
        ></img>
      </div>
    </Paper>
  );
}
