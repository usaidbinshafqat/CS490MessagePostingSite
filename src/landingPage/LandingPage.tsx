import { Box, Grid } from "@mui/material";
import { LandingPageButtons } from "./LandingPageButtons";

export const LandingPage = () => {
  return (
    //big screen
    <div
      style={{
        height: "70vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        display="flex"
        flex="1"
        justifyContent="space-around"
        style={{ height: "70vh" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <LandingPageButtons />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
