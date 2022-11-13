import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Tag } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions } from "../store/slice";

export const BottomBar = () => {
  const homePageState = useAppSelector(
    (state) => state.reducers.homePageActive
  );
  const [currentTab, setCurrentTab] = React.useState(homePageState);

  const dispatch = useAppDispatch();
  return (
    <BottomNavigation
      showLabels
      onChange={(event, newValue) => {
        setCurrentTab(newValue);
        dispatch(actions.changeTab(newValue));
      }}
      value={currentTab}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Trends" icon={<Tag />} />
    </BottomNavigation>
  );
};
