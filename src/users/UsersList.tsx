import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export const UsersList = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", alignItems: "center" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
                P
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="@phumz"></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
                M
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="@mal"></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
                U
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="@usaid" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
                K
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="@kyle" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
                J
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="@jackson" />
      </ListItem>
    </List>
  );
};