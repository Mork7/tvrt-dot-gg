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
// import { useState } from "react";

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
  return (
    <Box
      sx={{
        width: "auto",
        margin: "10px 0 10px auto",
        "@media (max-width: 808px)": {
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <TableContainer component={Paper} sx={{ borderRadius: "1%" }}>
        <Table
          sx={{ minWidth: 400, backgroundColor: "#212422" }}
          aria-label="simple table"
        >
          {/* TABLE HEAD: SUMMONERNAME, RANK, LP, WINS , LOSSES */}
          <TableHead sx={headerCellStyle}>
            <TableRow sx={{ height: "80px", display: "flex" }}>
              <TableCell
                sx={{
                  ...cellStyle,
                  fontWeight: 600,
                  fontSize: "large",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {championData[0].champName}
              </TableCell>
              <TableCell
                sx={{ ...cellStyle, display: "flex", alignItems: "center" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Champion Name"
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "white",
                    padding: "5px",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Object.entries(championData[0]).map(([key, value]) => (
              <TableRow key={key}>
                {key !== "champName" ? (
                  <TableCell key={value} sx={{ ...cellStyle, width: "100%" }}>
                    {`${key}: ${value}`}
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
