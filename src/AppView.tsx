import { Paper } from "@mui/material";
import React from "react";
import { BottomBar } from "./homePage/BottomBar";
import { HomePage } from "./homePage/HomePage";
import { TopAppBar } from "./homePage/TopAppBar";

export const AppView = () => {
  return (
    <React.Fragment>
      <TopAppBar />
      <HomePage />
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomBar />
      </Paper>
    </React.Fragment>
  );
};
