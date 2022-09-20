import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Tag } from "@mui/icons-material";

export const BottomBar = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      onChange={(event, newValue) => {
        setCurrentTab(newValue);
      }}
      value={currentTab}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Trends" icon={<Tag />} />
    </BottomNavigation>
  );
};
