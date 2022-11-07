import { Grid } from "@mui/material";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Trends } from "../trends/Trends";
import { ProfileCards } from "./ProfileCards";
import { Header } from "./ProfileHeader";

export const ProfilePage = () => {
  return (
    <div
      style={{
        alignContent: "center",
        marginLeft: "100px",
        marginRight: "auto",
      }}
    >
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        <Grid xs={2}>
          <LeftTabs />
        </Grid>
        <Grid xs={6}>
          <Header />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
          <ProfileCards />
        </Grid>
        <Grid xs>
          <Trends />
        </Grid>
      </Grid>
    </div>
  );
};
