import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export const TrendsList = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", alignItems: "center" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="#" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary="#SueTheCaf"></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="#" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText primary="#DrVargasPerezGOAT"></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="#" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText primary="#CnclVwls" />
      </ListItem>
    </List>
  );
};
