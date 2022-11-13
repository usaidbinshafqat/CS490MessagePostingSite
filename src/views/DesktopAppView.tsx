import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { HomePage } from "../homePage/HomePage";
import LeftTabs from "../homePage/LeftTabs";
import { Trends } from "../trends/Trends";
import { default as Axios } from "axios";

export const DeskopAppView = () => {
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
        <HomePage />
      </Grid>
      <Grid xs>
        <Trends data={trendsData} />
      </Grid>
    </Grid>
  );
};
