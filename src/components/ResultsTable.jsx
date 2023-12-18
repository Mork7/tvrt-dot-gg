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
  createData("TVRT Shadowhawk", "Emerald IV", 0, 137, 160),
  createData("TVRT Gwegg", "Gold II", 8, 6, 3),
  createData("TVRT Verax", "Platinum I", 49, 164, 157),
  createData("muaythaiguy22", "Iron I", 3, 5, 5),
  createData("RogueRaven", "Emerald IV", 0, 199, 202),
  createData("bobjenkins1", "Challenger", 2104, 246, 175),
  createData("optimal", "Grandmaster", 886, 295, 243),
  createData("CuteMeowOwO", "Diamond I", 99, 73, 65),
  createData("Cinicminc", "Platinum II", 45, 13, 9),
  createData("Gucci Grandpa", "Silver I", 95, 14, 9),
  createData("Wittsie", "Master", 543, 199, 170),
  createData("Youri Tarted", "Bronze I", 99, 2, 4),
  createData("Manly Mufasa", "Silver III", 34, 3, 5),
];

const headerCellStyle = {
  borderBottom: "2px solid #34333d",
  textDecoration: "underline",
  fontWeight: "bold",
  backgroundColor: "#0e183b",
};

const cellStyle = {
  color: "#d5d6db",
  borderBottom: "1px solid #34333d",
};

function selectRankImage(rank) {
  const imageDict = {
    Iron: "./iron.webp",
    Bronze: "./bronze.webp",
    Silver: "./silver.webp",
    Gold: "./gold.webp",
    Platinum: "./platinum.webp",
    Emerald: "./emerald.webp",
    Diamond: "./diamond.webp",
    Master: "./master.webp",
    Grandmaster: "./grandmaster.webp",
    Challenger: "./challenger.webp",
  };

  switch (true) {
    case rank.toLowerCase().includes("iron"):
      return imageDict.Iron;
    case rank.toLowerCase().includes("bronze"):
      return imageDict.Bronze;
    case rank.toLowerCase().includes("silver"):
      return imageDict.Silver;
    case rank.toLowerCase().includes("gold"):
      return imageDict.Gold;
    case rank.toLowerCase().includes("platinum"):
      return imageDict.Platinum;
    case rank.toLowerCase().includes("emerald"):
      return imageDict.Emerald;
    case rank.toLowerCase().includes("diamond"):
      return imageDict.Diamond;
    case rank.toLowerCase() === "master":
      return imageDict.Master;
    case rank.toLowerCase() === "grandmaster":
      return imageDict.Grandmaster;
    case rank.toLowerCase() === "challenger":
      return imageDict.Challenger;
    default:
      // Handle cases where no match is found
      return undefined;
  }
}

export default function ResultsTable() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "10px auto",
        "@media (min-width: 790px)": {
          width: "50%",
          margin: "10px 0 10px auto",
        },
      }}
    >
      <TableContainer component={Paper} sx={{ borderRadius: "1%" }}>
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
