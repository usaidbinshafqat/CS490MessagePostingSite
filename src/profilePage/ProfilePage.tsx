import { Grid } from "@mui/material";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Header } from "./ProfileHeader";
import { Trends } from "../trends/Trends";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { default as Axios } from "axios";
import { UniqueHeader } from "./uniqueHeader";
import { CardUI } from "../cards/CardUI";

export const ProfilePageUnique = () => {
  const [messageData, setMessageData] = useState([]);
  const username = useParams();
  const [UID, setUID] = useState(0);

  useEffect(() => {
    const getMessageByUsername = () => {
      Axios.get(`http://localhost:3000/users/byusername/${username.UID}`).then(
        (response: any) => {
          response.data.map((user: { UID: any }) => {
            Axios.get(`http://localhost:3000/message/byId/${user.UID}`).then(
              (response) => {
                setMessageData(response.data);
                console.log(response.data);
                console.log(messageData);
              }
            );
          });
        }
      );
    };
    getMessageByUsername();
    console.log(messageData);
  }, []);

  // useEffect(() => {
  //   const getMessageByUsername = () => {
  //     Axios.get(`http://localhost:3000/users/byusername/${username.UID}`).then(
  //       (response: any) => {
  //         response.data.map((user: { UID: any }) => {
  //           getMessageByID(user.UID);
  //         });
  //       }
  //     );
  //   };

  //   getMessageByUsername();
  // }, []);

  // function getMessageByID(UID: any) {
  //   Axios.get(`http://localhost:3000/message/byId/${UID}`).then((response) => {
  //     setMessageData(response.data);
  //     console.log(response.data);
  //     console.log(messageData);
  //   });
  // }

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
            <Header />
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
};
