import { Grid } from "@mui/material";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Trends } from "../trends/Trends";
import { ProfileCards } from "./ProfileCards";
import { Header } from "./ProfileHeader";
import { default as Axios } from "axios";
import { useEffect, useState } from "react";

export const ProfilePage = () => {
  const [trendsData, setTrendsData] = useState([]);

  const getTrendsData = () => {
    Axios.get("http://localhost:3000/trends").then((response: any) => {
      setTrendsData(response.data);
    });
  };

  useEffect(() => {
    getTrendsData();
  });

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
          <Trends data={trendsData} />
        </Grid>
      </Grid>
    </div>
  );
};
