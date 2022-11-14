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
import { default as Axios } from "axios";
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
  const [name, setName] = useState("")

  const updateLikes = (id: number) => {
    Axios.put(`http://localhost:3000/likes/?id=${id}`, {
      MessageID: id,
      Likes: likes + 1,
    }).then((response) => {
      console.log("id", id);
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
                navigate(`/Profile/${props.UID}`);
              }}
            >
              U
            </Avatar>
          }
          titleTypographyProps={{ align: "left" as const }}
          title={name}
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
