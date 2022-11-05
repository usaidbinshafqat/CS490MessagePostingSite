import {
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Box,
  Card,
  Button,
} from "@mui/material";
import React from "react";
import { InputTextField } from "./TextField";

const card = (
  <React.Fragment>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
          U
        </Avatar>
      }
      titleTypographyProps={{ align: "left" as const, variant: "h6" }}
      title="Create a new post"
    />
    <CardContent>
      <InputTextField />
    </CardContent>
    {/* <CardActions>
      <Button
        size="small"
        variant="contained"
        fullWidth
        style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
      >
        Post
      </Button>
    </CardActions> */}
  </React.Fragment>
);

export const DesktopPostCard = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
