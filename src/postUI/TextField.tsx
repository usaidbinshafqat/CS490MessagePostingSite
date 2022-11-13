import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import mentionsStyles from "./mentionsStyles";
import mentionsInputStyles from "./mentionsInputStyles";
import merge from "lodash/merge";
import { default as Axios } from "axios";
import { Button, CardActions } from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { LockPersonRounded, LockOpenRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const InputTextField = () => {
  // const [value, setValue] = useState("")
  const [newPost, setNewPost] = useState("");
  const [userID, setUserID] = useState(3);
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

  const createPost = () => {
    Axios.post("http://localhost:3000/api/post", {
      newPost: newPost,
      userID: userID,
      messageType: messageType,
      path: path,
      postDate: postDate,
      likes: likes,
      privacy: privacy,
    }).then((response: { data: any }) => {
      console.log(response.data);
    });
  };

  const resetCard = () => {
    setNewPost("");
  };

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

  let customStyle = merge({}, mentionsInputStyles, {
    input: {
      height: 80,
      overflow: "auto",
    },
    highlighter: {
      height: 80,
      overflow: "hidden",
      boxSizing: "border-box",
    },
  });

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "Emmanuel",
    },
  ];

  return (
    <>
      <div className="App">
        <MentionsInput
          style={customStyle}
          value={newPost}
          placeholder={randomPlaceholderGenerator()}
          a11ySuggestionsListLabel={"Suggested mentions"}
          onChange={(e) => setNewPost(e.target.value)}
        >
          <Mention style={mentionsStyles} data={users} trigger={"@"} />
        </MentionsInput>
      </div>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
          fullWidth
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
