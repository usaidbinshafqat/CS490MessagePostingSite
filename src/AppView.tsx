import { Paper } from "@mui/material";
import React from "react";
import { BottomBar } from "./homePage/BottomBar";
import { HomePage } from "./homePage/HomePage";
import { TopAppBar } from "./homePage/TopAppBar";
import { useAppSelector } from "./store/hooks";
import { Trends } from "./trends/Trends";

export const AppView = () => {
  const homePageState = useAppSelector((state) => state.counter.homePageActive);

  return (
    <React.Fragment>
      <TopAppBar />
      {homePageState === 0 ? <HomePage /> : <Trends />}
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomBar />
      </Paper>
    </React.Fragment>
  );
};
