import { Box, Container, Tab, Tabs } from "@mui/material";
import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";
import { Trends } from "../trends/Trends";
import { HomePage } from "./HomePage";
import { Users } from "../users/Users";

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
        <Box sx={{ width: 0.7 }}>
          {homePageState === 0 && (
            <Container maxWidth="sm">
              <HomePage />
            </Container>
          )}
          {/* {homePageState === 1 && (
            <Container maxWidth="sm">
              <Users />
            </Container>
          )} */}
          {homePageState === 1 && (
            <Container maxWidth="sm">
              <Trends />
            </Container>
          )}
        </Box>
      </Box>
    </Box>
  );
};
