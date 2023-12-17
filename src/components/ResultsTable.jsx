import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function createData(name, rank, lp, wins, losses) {
  let winRate = wins / (wins + losses);

  if (isNaN(winRate)) {
    winRate = 0;
  }

  return { name, rank, lp, wins, losses, winRate };
}

const rows = [
  createData("Morkster", "Emerald III", 39, 200, 188),
  createData("Shadowhawk", "Emerald IV", 0, 137, 160),
  createData("Gwegg", "Gold II", 8, 6, 3),
  createData("Demm Nips", "Emerald IV", 0, 38, 23),
  createData("Verax", "Emerald IV", 49, 0, 0),
  createData("muaythaiguy22", "Iron I", 3, 5, 5),
  createData("RogueRaven", "Emerald IV", 0, 199, 202),
  createData("bobjenkins1", "Challenger", 2104, 246, 175),
  createData("optimal", "Grandmaster", 886, 295, 243),
  createData("CuteMeowOwO", "Diamond I", 99, 73, 65),
  createData("Cinicminc", "Platinum II", 45, 13, 9),
  createData("Gucci Grandpa", "Silver I", 95, 14, 9),
  createData("Wittsie", "Master", 543, 199, 170),
  createData("Youri Tarted", "Bronze I", 99, 2, 4),
];

const headerCellStyle = {
  borderBottom: "2px solid #000",
  textDecoration: "underline",
  fontWeight: "bold",
};

const cellStyle = {
  color: "white",
  borderBottom: "1px solid white",
};

function selectRankImage(rank) {
  const imageDict = {
    "Iron": "./iron.webp",
    "Bronze": "./bronze.webp",
    "Silver" : "./silver.webp",
    "Gold" : "./gold.webp",
    "Platinum" : "./platinum.webp",
    "Emerald": "./emerald.webp",
    "Diamond" : "./diamond.webp",
    "Master" : "./master.webp",
    "Grandmaster" : "./grandmaster.webp",
    "Challenger" : "./challenger.webp",
  }

  if (rank.toLowerCase().includes("iron")){
    return imageDict.Iron

  } else if (rank.toLowerCase().includes("bronze")){
    return imageDict.Bronze
  
  } else if (rank.toLowerCase().includes("silver")){
    return imageDict.Silver

  } else if (rank.toLowerCase().includes("gold")){
    return imageDict.Gold
  
  } else if (rank.toLowerCase().includes("platinum")){
    return imageDict.Platinum
  
  } else if (rank.toLowerCase().includes("emerald")){
    return imageDict.Emerald
  
  } else if (rank.toLowerCase().includes("diamond")){
    return imageDict.Diamond
  
  } else if (rank === "Master"){
    return imageDict.Master

  } else if (rank === "Grandmaster"){
    return imageDict.Grandmaster
  
  } else if (rank === "Challenger"){
    return imageDict.Challenger
  } 
}

export default function ResultsTable() {
  return (
    <Box sx={{ width: "40%", marginLeft: "auto", paddingBottom: "20px" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "#212422" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerCellStyle, ...cellStyle }}>
                Summoner Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ ...headerCellStyle, ...cellStyle }}
              >
                Rank
              </TableCell>
              <TableCell
                align="right"
                sx={{ ...headerCellStyle, ...cellStyle }}
              >
                LP
              </TableCell>
              <TableCell
                align="right"
                sx={{ ...headerCellStyle, ...cellStyle }}
              >
                Wins
              </TableCell>
              <TableCell
                align="right"
                sx={{ ...headerCellStyle, ...cellStyle }}
              >
                Losses
              </TableCell>
              <TableCell
                align="right"
                sx={{ ...headerCellStyle, ...cellStyle }}
              >
                Win Rate
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={cellStyle}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ ...cellStyle, paddingTop: "0" }}>
                  {row.rank}
                  <img
                    src={selectRankImage(row.rank)}
                    alt="rank"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginLeft: "5px",
                      marginTop: "10px",
                    }}
                  ></img>
                </TableCell>
                <TableCell align="right" sx={cellStyle}>
                  {row.lp}
                </TableCell>
                <TableCell align="right" sx={cellStyle}>
                  {row.wins}
                </TableCell>
                <TableCell align="right" sx={cellStyle}>
                  {row.losses}
                </TableCell>
                <TableCell align="right" sx={cellStyle}>
                  {row.winRate !== undefined
                    ? `${(row.winRate * 100).toFixed(2)}%`
                    : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}