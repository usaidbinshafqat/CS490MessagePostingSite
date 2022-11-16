import { CardHeader, Avatar, CardContent, Box, Card } from "@mui/material";
import React from "react";
import { InputTextField } from "./TextField";
import AddIcon from "@mui/icons-material/Add";

const card = (
  <React.Fragment>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
          <AddIcon />
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
