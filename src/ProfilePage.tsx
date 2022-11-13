import { Grid } from "@mui/material";
import LeftTabs from "./homePage/LeftTabs";
import { TopAppBar } from "./homePage/TopAppBar";
import { ProfileCards } from "./profilePage/ProfileCards";
import { Header } from "./profilePage/ProfileHeader";
import { Trends } from "./trends/Trends";

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
        </Grid>
        <Grid xs>
          <Trends />
        </Grid>
      </Grid>
    </div>
  );
};
