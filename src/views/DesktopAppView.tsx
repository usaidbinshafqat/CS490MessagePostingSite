import React from "react";
import { LeftTabs } from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";

export const DeskopAppView = () => {
  return (
    <>
      <React.Fragment>
        <TopAppBar />
        <LeftTabs />
      </React.Fragment>
    </>
  );
};
