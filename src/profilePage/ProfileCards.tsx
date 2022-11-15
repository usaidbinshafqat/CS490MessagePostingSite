import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hashtag } from "../cards/Hashtags";
import { default as Axios } from "axios";

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

export const ProfileCards = (props: MessageDataProps) => {
  const testing = String(props.Date);
  let navigate = useNavigate();
  let userID = props.UID;
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/users").then((response: any) => {
      setName(response.data.find((row: any) => row.UID === userID)?.Username);
    });
  }, [userID]);

  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#453750" }}
              aria-label="profile pic"
            >
              U
            </Avatar>
          }
          titleTypographyProps={{ align: "left" as const }}
          title={name}
          subheaderTypographyProps={{ align: "left" as const }}
          subheader={moment(testing).format("MMM Do YYYY, h:mm a")}
        />
        <CardContent>
          <Typography align="left">
            <Hashtag message={props.Message}></Hashtag>
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
