import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, rank, lp, wins, losses) {
  const winRate = wins / (wins + losses);
  return { name, rank, lp, wins, losses, winRate };
}

const rows = [
  createData("Morkster", "Emerald III", 39, 200, 188),
  createData("Shadowhawk", "Emerald IV", 0, 137, 160),
  createData("Gwegg", "Gold II", 8, 6, 3),
  createData("Demm Nips", "Emerald IV", 0, 38, 23),
];

const headerCellStyle = {
  borderBottom: "2px solid #000",
  textDecoration: "underline",
};

export default function ResultsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle}>
              <strong>Summoner Name</strong>
            </TableCell>
            <TableCell align="right" sx={headerCellStyle}>
              <strong>Rank</strong>
            </TableCell>
            <TableCell align="right" sx={headerCellStyle}>
              <strong>LP</strong>
            </TableCell>
            <TableCell align="right" sx={headerCellStyle}>
              <strong>Wins</strong>
            </TableCell>
            <TableCell align="right" sx={headerCellStyle}>
              <strong>Losses</strong>
            </TableCell>
            <TableCell align="right" sx={headerCellStyle}>
              <strong>Win Rate</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.lp}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.losses}</TableCell>
              <TableCell align="right">
                {row.winRate !== undefined
                  ? `${(row.winRate * 100).toFixed(2)}%`
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
