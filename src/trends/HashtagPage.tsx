import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProfileCards } from "../profilePage/ProfileCards";
import { default as Axios } from "axios";
import { useState, useEffect } from "react";
import { CardUI } from "../cards/CardUI";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Trends } from "./Trends";

export const HashtagPage = () => {
  const hashtagID = useParams();
  const [data, setData] = useState([]);
  const [titleData, setTitleData] = useState([]);
  const [title, setTitle] = useState("");

  const getTitle = () => {
    Axios.get(
      `http://localhost:3000/hashtagvalue/?HashTagID=${hashtagID.id}`
    ).then((response: any) => {
      setTitleData(response.data);
      {
        titleData.map((value: any) => {
          setTitle(value.HashTag);
        });
      }
    });
  };

  const getPosts = () => {
    Axios.get(
      `http://localhost:3000/hashtagPage/?HashTagID=${hashtagID.id}`
    ).then((response: any) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getTitle();
    getPosts();
  });

  return (
    <div
      style={{
        alignContent: "center",
        marginLeft: "100px",
        marginRight: "auto",
      }}
    >
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            gap: 1,
          },
        }}
      >
        <Grid item xs={2}>
          <LeftTabs />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            align="left"
            sx={{
              paddingLeft: "18px",
              paddingTop: "13px",
              paddingBottom: "7px",
              color: "#C197D2",
              fontWeight: "bold",
            }}
          >
            {`#${title}`}
          </Typography>
          <div>
            {data.map((event: any) => (
              <CardUI
                MessageID={event.MessageID}
                UID={event.UID}
                TypeOfMessage={event.TypeOfMessage}
                Message={event.Message}
                Path={event.Path}
                Date={event.Date}
                Likes={event.Likes}
                Privacy={event.Privacy}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs>
          <Trends />
        </Grid>
      </Grid>
    </div>
  );
};
