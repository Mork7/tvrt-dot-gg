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
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function MostPlayed({ mostPlayedChamps }) {
  if (!mostPlayedChamps || mostPlayedChamps.length === 0) {
    return null;
  }

  return (
    <Paper
      id={"hover-effect"}
      sx={{
        height: "100%",
        width: "auto",
        padding: "15px",
        backgroundColor: "#212422",
        margin: "10px auto", // Center the Paper horizontally
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // Apply styles for smaller screens using @media query
        ...commonSmallScreenStyles.smallScreenStyles,
      }}
    >
      <Box>
        <List key="header" component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText>
              <Typography
                sx={{ color: "#d5d6db", fontSize: "20px", fontWeight: 600 }}
              >
                Most Played Champions
              </Typography>
            </ListItemText>
          </ListItem>
          {mostPlayedChamps.map((champ) => (
            <React.Fragment key={champ}>
              <ListItemAvatar
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Avatar>
                  <img
                    src={`./champion-icons/${champ}.webp`} // no spaces
                    alt="champ-icon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Avatar>
                <ListItemText sx={{ marginLeft: ".5rem" }}>
                  <Typography sx={{ color: "#d5d6db" }}>{champ}</Typography>
                </ListItemText>
              </ListItemAvatar>
              <Divider sx={{ margin: "5px" }} />
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
