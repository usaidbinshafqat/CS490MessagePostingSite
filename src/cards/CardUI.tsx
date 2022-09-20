import { Box, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography>CS Final Project</Typography>
      <Typography>Phumz, Mallory, Usaid, Kyle, Jackson</Typography>
    </CardContent>
  </React.Fragment>
);

export const CardUI = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
