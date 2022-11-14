import { Grid } from "@mui/material";
import LeftTabs from "../homePage/LeftTabs";
import { TopAppBar } from "../homePage/TopAppBar";
import { Trends } from "../trends/Trends";
import { ProfileCards } from "./ProfileCards";
import { Header } from "./ProfileHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { default as Axios } from "axios";

export const ProfilePageLoggedIn = () => {
  const [messageData, setMessageData] = useState([]);
  const [UID, setUID] = useState(2);
  const [username, setUsername] = useState("");

  // const fillUserData = () => {
  //   Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
  //     (response: any) => {
  //       response.data.map((user: { UID: any }) => {
  //         setUID(user.UID);
  //       });
  //     }
  //   );
  // };

  // const getMessageData = () => {
  //   Axios.get(`http://localhost:3000/message/byId/${UID}`).then((response) => {
  //     setMessageData(response.data);
  //   });
  // };

  useEffect(() => {
    Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
      (response: any) => {
        response.data.map((user: { UID: any }) => {
          setUID(user.UID);
        });
      }
    );
  }, [username]);

  useEffect(() => {
    Axios.get(`http://localhost:3000/message/byId/${UID}`).then((response) => {
      setMessageData(response.data);
    });
  }, [UID]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users/isAuth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUsername(response.data.Username);
    });
  }, []);

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
          {Object.values(messageData).map((event: any) => (
            <ProfileCards
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
};
