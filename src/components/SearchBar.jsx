import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import RegionSelect from "./RegionSelect";
import PropTypes from "prop-types";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// eslint-disable-next-line react/prop-types
export default function SearchBar({ onSearch }) {
  const [summonerName, setSummonerName] = useState("");
  const [tagLine, setTagLine] = useState("");

  function handleOnSearch() {
    onSearch({ summonerName, tagLine });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "#262530", height: "100px" }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              display: { xs: "none", md: "block", fontWeight: "1000" },
              overflow: "hidden",
              paddingRight: "20px",
            }}
          >
            TVRT.GG
          </Typography>
          <RegionSelect />
          <Search>
            <StyledInputBase
              sx={{ bgcolor: "#47474" }}
              placeholder="Summoner Name"
              id="summoner-name-input"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSummonerName(e.target.value)}
            />
            <StyledInputBase
              sx={{ bgcolor: "#47474" }}
              placeholder="Tag Line"
              id="tag-line-input"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setTagLine(e.target.value)}
            />
          </Search>
          <Button
            variant="contained"
            sx={{ bgcolor: "#2c5699", "&:hover": { bgcolor: "#1c3763" } }}
            onClick={handleOnSearch}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
