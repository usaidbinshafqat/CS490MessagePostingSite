import {
  Box,
  Card,
  IconButton,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FollowButton } from "./FollowButton";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { default as Axios } from "axios";
import { Hashtag } from "./Hashtags";
import { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
  const [following, setFollowing] = useState([] as any);
  const [currentUID, setCurrentUID] = useState();

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

    Axios.get("http://localhost:3000/users/isAuthID", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setCurrentUID(response.data.UID);
      console.log(response.data.UID);
    });

    Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
      // console.log(response.data);
      setFollowing(
        response.data.filter((row: any) => row.UID === currentUID)?.Following
      );
      console.log(following);
    });
  }, [userID, currentUID, following]);

  const followUser = () => {
    Axios.post(
      "http://localhost:3000/userfollowing",
      {
        Following: userID,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    );
  };

  return (
    <Box sx={{ minWidth: 275, margin: "10px" }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "#453750" }}
              aria-label="profile pic"
              onClick={() => {
                navigate(`/ProfilePage/${name}`);
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
            <Button
              variant="contained"
              style={{ borderRadius: 20 }}
              size="small"
              onClick={followUser}
              disabled={following?.includes(userID) === true ? true : false}
              endIcon={
                <PersonAddIcon
                  color={following?.includes(userID) ? "warning" : "error"}
                />
              }
            >
              {following?.includes(userID) ? "Following" : "Follow"}
            </Button>
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
