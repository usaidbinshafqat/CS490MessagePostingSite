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
// import { FollowButton, FollowButtonMobile } from "./FollowButton";
import { useNavigate } from "react-router-dom";
import { default as Axios } from "axios";
import { Hashtag } from "./Hashtags";
import { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import { Person } from "@mui/icons-material";

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
  const [checkFollow, setCheckFollow] = useState(false);
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

    Axios.get("http://localhost:3000/users/isAuthID", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setCurrentUID(response.data.UID);
    });

    Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
      // console.log(response.data);
      setFollowing(
        response.data
          .filter((row: any) => row.UID === currentUID)
          .map((row: any) => row.Following)
      );
      setCheckFollow(following?.includes(userID));
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
              {name.slice(0, 1).toUpperCase()}
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
            // window.screen.width > 600 ? (
            //   <FollowButton following={false}></FollowButton>
            // ) : (
            //   <FollowButtonMobile following={false}></FollowButtonMobile>
            // )
            <Button
              variant="contained"
              style={{ borderRadius: 20 }}
              size="small"
              onClick={() => {
                !checkFollow && followUser();
              }}
              endIcon={
                !checkFollow ? (
                  <PersonAddIcon
                    color={following?.includes(userID) ? "warning" : "error"}
                  />
                ) : (
                  <Person
                    color={following?.includes(userID) ? "warning" : "error"}
                  />
                )
              }
            >
              {checkFollow ? "Following" : "Follow"}
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
