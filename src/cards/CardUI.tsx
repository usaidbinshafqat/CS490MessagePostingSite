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
import { FollowButton, FollowButtonMobile } from "./FollowButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { default as Axios } from "axios";
import { Hashtag } from "./Hashtags";
import { useEffect, useState } from "react";

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
export const CardUI = (props: MessageDataProps) => {
  let navigate = useNavigate();
  let userID = props.UID;

  const [likeButton, setLikeButton] = useState(false);
  const testing = String(props.Date);
  const [likes, setLikes] = useState(props.Likes);
  const [name, setName] = useState("");
  const [messageID, setMessageID] = useState(0);

  const updateLikes = (id: number) => {
    Axios.get(`http://localhost:3000/message/bymsgid/${id}`).then(
      (response) => {
        console.log(response.data.MessageID);
        console.log(response.data.Likes);
        setLikes(response.data.Likes);
        setMessageID(response.data.MessageID);
      }
    );

    Axios.post("http://localhost:3000/message", {
      Likes: likes,
      MessageID: messageID,
    }).then((response) => {
      console.log(response.data.error);
    });
  };

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
              onClick={() => {
                navigate(`/ProfilePage/${props.UID}`);
              }}
            >
              U
            </Avatar>
          }
          titleTypographyProps={{ align: "left" as const }}
          title={name}
          subheaderTypographyProps={{ align: "left" as const }}
          // subheader={moment
          //   .tz(testing, "US/Eastern")
          //   .format("MMM Do YYYY, h:mm a")}
          subheader={testing}
          action={
            window.screen.width > 600 ? (
              <FollowButton following={false}></FollowButton>
            ) : (
              <FollowButtonMobile following={false}></FollowButtonMobile>
            )
          }
        />
        <CardContent>
          <Typography align="left">
            <Hashtag message={props.Message}></Hashtag>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            color={likeButton ? "error" : "warning"}
            onClick={() => {
              updateLikes(props.MessageID);
              setLikeButton(!likeButton);
            }}
            disabled={likeButton === true ? true : false}
          >
            <FavoriteIcon />
          </IconButton>
          <Typography> {likes}</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};
