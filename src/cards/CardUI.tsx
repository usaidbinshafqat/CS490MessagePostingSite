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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button } from "@mui/material";
import { HashtagButton } from "./Hashtags";

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

class FollowButton extends React.Component<{}, { followed: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      followed: false,
    };
  }

  render() {
    return (
      <Button
        variant="contained"
        style={{ borderRadius: 20 }}
        size="small"
        onClick={() => this.setState({ followed: !this.state.followed })}
        endIcon={
          <PersonAddIcon color={this.state.followed ? "warning" : "error"} />
        }
      >
        {this.state.followed ? "Unfollow" : "Follow"}
      </Button>
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
