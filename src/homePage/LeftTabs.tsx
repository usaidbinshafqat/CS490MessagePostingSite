import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import {
  PersonRounded,
  HomeRounded,
  SettingsRounded,
  ExitToApp,
} from "@mui/icons-material";

export default function LeftTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          href="/Home"
          selected={selectedIndex === 0}
          onClick={() => setSelectedIndex(0)}
        >
          <ListItemIcon>
            <HomeRounded />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          href="/Profile"
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        >
          <ListItemIcon>
            <PersonRounded />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav">
        <ListItemButton
          href="/Settings"
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        >
          <ListItemIcon>
            <SettingsRounded />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <List component="nav">
        <ListItemButton onClick={logout} href="/">
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}
