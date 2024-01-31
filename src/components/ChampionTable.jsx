import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel, Typography, Avatar } from "@mui/material";
import { useState } from "react";
import { getChampion } from "../utils/leagueApi";

// styles for the headers
const headerCellStyle = {
  borderBottom: "2px solid #34333d",
  fontWeight: "bold",
  backgroundColor: "#0e183b",
  color: "#d5d6db",
};

// styles for cells
const cellStyle = {
  color: "#d5d6db",
  borderBottom: "1px solid #34333d",
};

export default function ChampionTable() {
  const [championData, setChampionData] = useState(null);
  const [championToSearch, setChampionToSearch] = useState("");

  const handleChange = (event) => {
    setChampionToSearch(event);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      // Trigger search when Enter key is pressed
      fetchChampionData();
    }
  };

  const fetchChampionData = async () => {
    try {
      const championData = await getChampion(championToSearch);
      console.log(championData[0]);
      setChampionData(championData);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (championData === null) {
  //     fetchChampionData();
  //   }
  // });

  return (
    <Box
      sx={{
        width: "auto",
        margin: "10px",
        "@media (max-width: 808px)": {
          width: "auto",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <TableContainer component={Paper} sx={{ borderRadius: "1%" }}>
        <Table sx={{ backgroundColor: "#212422" }} aria-label="simple table">
          {/* TABLE HEAD: SUMMONERNAME, RANK, LP, WINS , LOSSES */}
          <TableHead sx={headerCellStyle}>
            <TableRow sx={{ height: "80px", display: "flex" }}>
              <TableCell
                sx={{ ...cellStyle, display: "flex", alignItems: "center" }}
              >
                <InputLabel sx={{ color: "#d5d6db" }} htmlFor="champion-search">
                  Search Champion...
                </InputLabel>
                <TextField
                  id="champion-search"
                  label="Champion Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    padding: "5px",
                    marginLeft: "5px",
                    ".MuiInputBase-input": {
                      color: "#d5d6db", // Text color
                    },
                    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d5d6db", // Border color
                    },
                    ".MuiInputLabel-outlined": {
                      color: "#d5d6db", // Label color when unfocused
                    },
                    "&.Mui-focused .MuiInputLabel-outlined": {
                      color: "#d5d6db", // Label color when focused (if you want to change it)
                    }
                  }}
                  onChange={(event) => handleChange(event.target.value)}
                  onKeyDown={handleEnterPress}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          {championData ? (
            <TableBody>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    ...cellStyle,
                    padding: "5px",
                  }}
                >
                  <Avatar>
                    <img
                      src={`./champion-icons/${championData[0].champName}.webp`}
                      alt="champ-icon"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </Avatar>
                </TableCell>
              </TableRow>
              {Object.entries(championData[0]).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell key={value} sx={{ ...cellStyle, width: "100%" }}>
                    {`${key}: ${value}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell sx={cellStyle}>
                  <Typography sx={{ ...cellStyle, borderBottom: "none" }}>
                    Please search a champion...
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
