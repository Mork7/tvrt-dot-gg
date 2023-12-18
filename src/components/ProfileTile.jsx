import Paper from "@mui/material/Paper";

export default function ProfileTile() {
  return (
    <Paper
      sx={{ height: "400px", width: "600px", backgroundColor: "#212422", margin: "10px 10px", display: "flex"}}
    >
      <div
        style={{
          height: "250px",
          width: "250px",
          backgroundColor: "blue",
          zIndex: 1, // Set zIndex to bring the div to the front
        }}
      ></div>
    </Paper>
  );
}
