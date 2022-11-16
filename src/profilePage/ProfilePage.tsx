import { Button, Grid, Paper, Typography } from "@mui/material";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Header } from "./ProfileHeader";
import { Trends } from "../trends/Trends";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { default as Axios } from "axios";
import { UniqueHeader } from "./uniqueHeader";
import { CardUI } from "../cards/CardUI";
import { BottomBar } from "../homePage/BottomBar";

export const ProfilePageUnique = () => {
  const [messageData, setMessageData] = useState([]);
  const username = useParams();
  const [UID, setUID] = useState(0);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkExists = () => {
      Axios.get(`http://localhost:3000/users/byusername/${username.UID}`).then(
        (response: any) => {
          response.data.length === 0
            ? setUserExists(false)
            : setUserExists(true);
        }
      );
    };

    const getMessageByUsername = () => {
      Axios.get(`http://localhost:3000/users/byusername/${username.UID}`).then(
        (response: any) => {
          response.data.map((user: { UID: any }) => {
            Axios.get(`http://localhost:3000/message/byId/${user.UID}`).then(
              (response) => {
                setMessageData(response.data);
              }
            );
          });
        }
      );
    };
    checkExists();
    getMessageByUsername();
  }, []);

  // function getMessageByID(UID: any) {
  //   Axios.get(`http://localhost:3000/message/byId/${UID}`).then((response) => {
  //     setMessageData(response.data);
  //     console.log(response.data);
  //     console.log(messageData);
  //   });
  // }

  if (!userExists) {
    return (
      <div
        style={{
          alignContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          display: "inline-flex",
        }}
      >
        <Typography>Error: User Does Not Exist!</Typography>
        <Button
          size="small"
          variant="contained"
          style={{
            borderRadius: 20,
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          href={"/Home"}
        >
          Return Home
        </Button>
      </div>
    );
  } else {
    if (window.screen.width > 600) {
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
              },
            }}
          >
            <Grid xs={2}>
              <LeftTabs />
            </Grid>
            <Grid xs={6}>
              <UniqueHeader username={username.UID} />
              {Object.values(messageData).map((event: any) => (
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
            </Grid>
            <Grid xs>
              <Trends />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div
          style={{
            alignContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ marginBottom: "70px" }}>
            <TopAppBar />
          </div>
          <div>
            <UniqueHeader username={username.UID} />
            {Object.values(messageData).map((event: any) => (
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
        </div>
      );
    }
  }
};
