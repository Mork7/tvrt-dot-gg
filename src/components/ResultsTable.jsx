import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// CREATEDATA. Will take in name, rank, lp, wins, losses
function createData(name, rank, lp, wins, losses) {
  let winRate = wins / (wins + losses);

  if (isNaN(winRate)) {
    winRate = 0;
  }

  return { name, rank, lp, wins, losses, winRate };
}


// creating test rows. Eventually these will be created using information pulled from an API.
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

// styles for the headers
const headerCellStyle = {
  borderBottom: "2px solid #34333d",
  textDecoration: "underline",
  fontWeight: "bold",
  backgroundColor: "#0e183b",
};
 
// styles for cells
const cellStyle = {
  color: "#d5d6db",
  borderBottom: "1px solid #34333d",
};

// SELECTRANKIMAGE. If a players rank {string} includes the substring pertaining to their rank, then the path {string} to the cooresponding image will be returned

function selectRankImage(rank) {
  const imagePathDict = {
    iron: "./iron.webp",
    bronze: "./bronze.webp",
    silver: "./silver.webp",
    gold: "./gold.webp",
    platinum: "./platinum.webp",
    emerald: "./emerald.webp",
    diamond: "./diamond.webp",
    master: "./master.webp",
    grandmaster: "./grandmaster.webp",
    challenger: "./challenger.webp",
  };

  // ex, if a players rank was Iron II, then imagePathDict.Iron would be returned
  switch (true) {
    case rank.toLowerCase().includes("iron"):
      return imagePathDict.iron;
    case rank.toLowerCase().includes("bronze"):
      return imagePathDict.bronze;
    case rank.toLowerCase().includes("silver"):
      return imagePathDict.silver;
    case rank.toLowerCase().includes("gold"):
      return imagePathDict.gold;
    case rank.toLowerCase().includes("platinum"):
      return imagePathDict.platinum;
    case rank.toLowerCase().includes("emerald"):
      return imagePathDict.emerald;
    case rank.toLowerCase().includes("diamond"):
      return imagePathDict.diamond;
    case rank.toLowerCase() === "master":
      return imagePathDict.master;
    case rank.toLowerCase() === "grandmaster":
      return imagePathDict.grandmaster;
    case rank.toLowerCase() === "challenger":
      return imagePathDict.challenger;
    default:
      // Handle cases where no match is found
      return undefined;
  }
}

export default function ResultsTable() {
  return (
    // BOX TO CONTAIN THE TABLE, ALLOWING FOR RESPONSIVE DESIGN.
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
          {/* TABLE HEAD: SUMMONERNAME, RANK, LP, WINS , LOSSES */}
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

          {/* TABLE BODY, MAPPING PLAYER STATS TO ROWS */}
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
