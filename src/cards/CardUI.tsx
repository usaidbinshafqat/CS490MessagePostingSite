import {
  Box,
  Card,
  IconButton,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Avatar,
} from "@mui/material";
import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HashtagButton } from "./Hashtags";
import { FollowButton } from "./FollowButton";

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
      action={<FollowButton></FollowButton>}
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

export const CardUI = () => {
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
