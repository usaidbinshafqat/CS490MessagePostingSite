import { useEffect, useState } from "react";
import { default as Axios } from "axios";
import {
  Button,
  CardActions,
  CircularProgress,
  TextField,
} from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { LockPersonRounded, LockOpenRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const InputTextField = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [disablePostButton, setDisablePostButton] = useState(true);
  const [newPost, setNewPost] = useState("");
  const [messageType, setMessageType] = useState("");
  const [path, setPath] = useState("");
  const [postDate, setPostDate] = useState(
    `${new Date().toLocaleString("en-US", {
      month: "short",
      year: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })}`
  );
  const [likes, setLikes] = useState(0);
  const [privacy, setPrivacy] = useState(false);
  const [hashTags, setHashTags] = useState([] as any);
  const [msgID, setMsgID] = useState(0);
  const [hashID, setHashID] = useState(0);
  const [currentHash, setCurrentHash] = useState("");

  const createPost = () => {
    Axios.post(
      "http://localhost:3000/message",
      {
        Message: newPost,
        TypeOfMessage: messageType,
        Path: path,
        Date: postDate,
        Likes: likes,
        Privacy: privacy,
      },
      {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      }
    ).then((response: { data: any }) => {});

    hashTags?.forEach((hashTag: string) => {
      setCurrentHash(hashTag.slice(1));
      Axios.post("http://localhost:3000/hashtag", {
        HashTag: hashTag.slice(1),
      }).then((response) => {
        console.log(response);
      });
    });
  };

  const resetCard = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (newPost.length > 0) {
      setDisablePostButton(false);
    } else {
      setDisablePostButton(true);
    }
  }, [newPost]);

  // useEffect(() => {
  //   Axios.get(`http://localhost:3000/message/bypost/${newPost}`).then(
  //     (response: any) => {
  //       setMsgID(response.data.MessageID);
  //       console.log(msgID);
  //     }
  //   );

  //   Axios.get(`http://localhost:3000/hashtag/byhashtag/${currentHash}`).then(
  //     (response: any) => {
  //       setHashID(response.data.HashTagID);
  //       console.log(hashID);
  //     }
  //   );

  //   Axios.post("http://localhost:3000/messagehashtag", {
  //     MessageID: msgID,
  //     HashTagID: hashID,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // }, [currentHash, newPost]);

  function CardToggleButton() {
    const handleTooltipTitle = () => {
      if (privacy) {
        return "Make post private";
      } else {
        return "Make post public";
      }
    };

    return (
      <Tooltip title={handleTooltipTitle()} arrow>
        <ToggleButton
          value="check"
          selected={privacy}
          onChange={() => {
            setPrivacy(!privacy);
            console.log(privacy);
          }}
          color="primary"
          size="small"
          style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
        >
          {privacy ? <LockOpenRounded /> : <LockPersonRounded />}
        </ToggleButton>
      </Tooltip>
    );
  }

  function randomPlaceholderGenerator() {
    const placeholders = [
      "What's on your mind?",
      "What's happening?",
      "What's new?",
      "What's up?",
      "What's happening?",
      "What's new?",
      "What's up?",
      "What's good?",
      "What's happening?",
      "What's new?",
      "What's up?",
      "What's good?",
      "What's happening?",
      "What's new?",
      "What's up?",
      "What's good?",
      "What's happening?",
      "What's new?",
      "What's up?",
      "What's good?",
      "What's poppin'?",
      "Tell us something",
      "What's the tea?",
      "What's new?",
      "What's going on?",
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  }
  useEffect(() => {
    setHashTags(newPost.match(/#[^\s#]*/gim));
  }, [newPost]);

  return (
    <>
      <div className="App">
        <TextField
          id="outlined-multiline-static"
          multiline
          fullWidth
          onChange={(e) => {
            setNewPost(e.target.value);
          }}
          rows={4}
          placeholder={randomPlaceholderGenerator()}
          helperText={newPost.length + "/200"}
          inputProps={{ maxLength: 200 }}
        />
      </div>
      <CardActions>
        <CircularProgress
          style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
          variant="determinate"
          value={(newPost.length / 200) * 100}
        />

        <Button
          size="small"
          variant="contained"
          style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
          fullWidth
          disabled={disablePostButton}
          onClick={() => {
            createPost();
            resetCard();
          }}
        >
          Post
        </Button>
        <CardToggleButton />
      </CardActions>
    </>
  );
};
