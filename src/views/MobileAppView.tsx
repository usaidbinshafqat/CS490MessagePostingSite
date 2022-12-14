import { Paper } from "@mui/material";
import React from "react";
import { BottomBar } from "../homePage/BottomBar";
import { HomePage } from "../homePage/HomePage";
import { NewPost } from "../postUI/NewPost";
import { useAppSelector } from "../store/hooks";
import { Trends } from "../trends/Trends";
import { ForYouPageMobile } from "../ForYouPage/ForYouMobile";

export const MobileAppView = () => {
  const homePageState = useAppSelector(
    (state) => state.reducers.homePageActive
  );
  const dialogState = useAppSelector((state) => state.reducers.modalOpen);

  return (
    <>
      <React.Fragment>
        {homePageState === "home" ? (
          <HomePage />
        ) : homePageState === "trends" ? (
          <Trends />
        ) : (
          <ForYouPageMobile />
        )}
        {dialogState === true ? <NewPost /> : <></>}

        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <BottomBar />
        </Paper>
      </React.Fragment>
    </>
  );
};
