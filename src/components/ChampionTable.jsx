import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import { useState, useEffect } from "react";

ChampionTable.propTypes = {
  championData: PropTypes.arrayOf(
    PropTypes.shape({
      champName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

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

export default function ChampionTable({ championData }) {
  const [championToSearch, setChampionToSearch] = useState("");

  const handleChange = (event) => {
    setChampionToSearch(event);
  };

  useEffect(() => {
    console.log(championToSearch);
  }, [championToSearch]);

  return (
    <Box
      sx={{
        width: "auto",
        margin: "10px 0 10px auto",
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
                    color: "white",
                    padding: "5px",
                    marginLeft: "5px",
                  }}
                  onChange={(event) => handleChange(event.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.entries(championData[0]).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell key={value} sx={{ ...cellStyle, width: "100%" }}>
                  {`${key}: ${value}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
