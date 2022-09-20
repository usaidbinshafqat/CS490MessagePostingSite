import * as React from "react";
import { Paper } from "@mui/material";
import { BottomBar } from "./BottomBar";
import { CardUI } from "../cards/CardUI";
import { TopAppBar } from "./TopAppBar";

export const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <TopAppBar />
      </div>

      <div>
        <CardUI />
        <CardUI />
        <CardUI />
      </div>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <BottomBar />
      </Paper>
    </React.Fragment>
  );
};
