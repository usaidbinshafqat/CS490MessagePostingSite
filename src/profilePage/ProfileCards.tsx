import {
  IconButton,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Box,
  Card,
} from "@mui/material";
import React from "react";
import { HashtagButton } from "../cards/Hashtags";
import FavoriteIcon from "@mui/icons-material/Favorite";

class LikeButton extends React.Component<{}, { liked: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <IconButton
        color={this.state.liked ? "warning" : "error"}
        onClick={() => this.setState({ liked: !this.state.liked })}
      >
        <FavoriteIcon />
      </IconButton>
    );
  }
}
const card = (
  <React.Fragment>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
          U
        </Avatar>
      }
      titleTypographyProps={{ align: "left" as const }}
      title="User"
      subheaderTypographyProps={{ align: "left" as const }}
      subheader="Time/Date Posted"
    />
    <CardContent>
      <Typography>CS Final Project</Typography>
      <Typography>
        {" "}
        <HashtagButton message="Phumz, Mallory, Usaid, Kyle, Jackson #hashtag #csproject"></HashtagButton>{" "}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Box></Box>
      <LikeButton> </LikeButton>
      <Typography> 200 </Typography>
    </CardActions>
  </React.Fragment>
);

export const ProfileCards = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
