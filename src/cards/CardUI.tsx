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
import moment from "moment";
import { useNavigate } from "react-router-dom";

export interface MessageDataProps {
  MessageID: number;
  UID: number;
  TypeOfMessage: string;
  Message: string;
  Path: string;
  Date: Date;
  Likes: number;
  Privacy: boolean;
}
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

export const CardUI = (props: MessageDataProps) => {
  const testing = String(props.Date);
  let navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#453750" }}
              aria-label="profile pic"
              onClick={() => {
                navigate(`/Profile/${props.UID}`);
              }}
            >
              U
            </Avatar>
          }
          titleTypographyProps={{ align: "left" as const }}
          title={props.UID}
          subheaderTypographyProps={{ align: "left" as const }}
          subheader={moment(testing).format("MMM Do YYYY, h:mm a")}
          action={<FollowButton></FollowButton>}
        />
        <CardContent>
          <Typography align="left">
            <HashtagButton message={props.Message}></HashtagButton>{" "}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box></Box>
          <LikeButton> </LikeButton>
          <Typography> {props.Likes}</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};
