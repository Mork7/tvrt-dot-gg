import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles";

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

const StyledMenuItem = styled(MenuItem)`
  &&:hover {
    background-color: #454745;
  }

  &&.Mui-selected {
    background-color: #454745;
  }
`;

// eslint-disable-next-line react/prop-types
export default function SearchBar({ onSearch }) {
  const [summonerName, setSummonerName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [region, setRegion] = useState("na");

  function handleOnSearch() {
    onSearch({ summonerName, tagLine, region });
  }

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      // Trigger search when Enter key is pressed
      handleOnSearch();
    }
  };

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
          <Box
            sx={{
              minWidth: 120,
              "@media (max-width: 808px)": {
                marginRight: "10px",
              },
            }}
          >
            {/* This is the region selector dropdown */}
            <FormControl fullWidth>
              <InputLabel
                id="region-select-label"
                sx={{ color: commonSmallScreenStyles.fontColor }}
              >
                Region
              </InputLabel>
              <Select
                placeholder="region"
                labelId="region-select-label"
                id="region-simple-select"
                value={region}
                label="Region"
                onChange={(event) => setRegion(event.target.value)}
                sx={{ color: commonSmallScreenStyles.fontColor }}
              >
                <StyledMenuItem
                  value={"na"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  North America
                </StyledMenuItem>
                <StyledMenuItem
                  value={"eune"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Europe Nordic & East
                </StyledMenuItem>
                <StyledMenuItem
                  value={"euw"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Europe West
                </StyledMenuItem>
                <StyledMenuItem
                  value={"ru"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Russia
                </StyledMenuItem>
                <StyledMenuItem
                  value={"kr"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Korea
                </StyledMenuItem>
                <StyledMenuItem
                  value={"oce"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Oceania
                </StyledMenuItem>
                <StyledMenuItem
                  value={"br"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Brazil
                </StyledMenuItem>
                <StyledMenuItem
                  value={"lan"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Latin America North
                </StyledMenuItem>
                <StyledMenuItem
                  value={"jp"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Japan
                </StyledMenuItem>
                <StyledMenuItem
                  value={"vn"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Vietnam
                </StyledMenuItem>
                <StyledMenuItem
                  value={"th"}
                  sx={{ bgcolor: "#212422", color: "#d5d6db" }}
                >
                  Thailand
                </StyledMenuItem>
              </Select>
            </FormControl>
          </Box>
          <Search>
            <StyledInputBase
              sx={{
                bgcolor: "#47474",
              }}
              placeholder="Summoner Name"
              id="summoner-name-input"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSummonerName(e.target.value)}
              onKeyDown={handleEnterPress}
            />
            <StyledInputBase
              sx={{ bgcolor: "#47474" }}
              placeholder="Tag Line"
              id="tag-line-input"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setTagLine(e.target.value)}
              onKeyDown={handleEnterPress}
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
