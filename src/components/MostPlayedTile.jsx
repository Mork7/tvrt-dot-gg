import Paper from "@mui/material/Paper";
import { commonSmallScreenStyles } from "../utils/commonSmallScreenStyles.js";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";

export default function MostPlayed({ mostPlayedChamps }) {
  if (!mostPlayedChamps || mostPlayedChamps.length === 0) {
    return null;
  }

  return (
    <Paper
      sx={{
        height: "100%",
        width: "425px", // this will be set dynamically according to summoner name length. There is a max char limit for names I just don't know it yet.
        backgroundColor: "#212422",
        margin: "10px 10px auto ",
        display: "flex",
        flexDirection: "column",
        // Apply styles for smaller screens using @media query
        ...commonSmallScreenStyles.smallScreenStyles,
      }}
    >
      <Box>
        <List key="header" component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText>
              <Typography sx={{color: "#d5d6db", fontSize: "20px", fontWeight: 600}}>Most Played Champions</Typography>
            </ListItemText>
          </ListItem>
          {mostPlayedChamps.map((champ) => (
            <React.Fragment key={champ}>
              <ListItem>
                <ListItemText sx={{ color: "#d5d6db" }} primary={champ} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

MostPlayed.propTypes = {
  mostPlayedChamps: PropTypes.arrayOf(PropTypes.string),
};
