import { Container } from "@mui/system";
import * as React from "react";
import { TopAppBar } from "../homePage/TopAppBar";
import { ProfileCards } from "./ProfileCards";
import { Header } from "./ProfileHeader";

export const ProfilePage = () => {
  return (
    <React.Fragment>
      <TopAppBar />
      <Container maxWidth="sm">
        <Header />
        <div>
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
        </div>
      </Container>
    </React.Fragment>
  );
};
