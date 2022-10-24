import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";
import { Trends } from "../trends/Trends";
import { HomePage } from "./HomePage";

export const LeftTabs = () => {
  const homePageState = useAppSelector(
    (state) => state.reducers.homePageActive
  );
  const [currentTab, setCurrentTab] = React.useState(homePageState);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Tabs
          value={currentTab}
          onChange={(event, newValue) => {
            setCurrentTab(newValue);
            dispatch(actions.changeTab(newValue));
          }}
          orientation="vertical"
        >
          <Tab label="Home" />
          <Tab label="Trends" />
        </Tabs>
        <Box sx={{ margin: 2 }}>
          {homePageState === 0 && (
            <Box>
              <HomePage />
            </Box>
          )}
          {homePageState === 1 && (
            <Box>
              <Trends />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
