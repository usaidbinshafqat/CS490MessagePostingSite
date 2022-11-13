import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Diversity1Icon from "@mui/icons-material/Diversity1";
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
        <ListItemButton
          href="/ForYou"
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        >
          <ListItemIcon>
            <Diversity1Icon />
          </ListItemIcon>
          <ListItemText primary="For You" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          href="/Settings"
          selected={selectedIndex === 3}
          onClick={() => setSelectedIndex(3)}
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
