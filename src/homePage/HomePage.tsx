import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { default as Axios } from "axios";
import { DesktopPostCard } from "../postUI/DesktopPostCard";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [loginStatus, setLoginStatus] = useState("");
  const [messageData, setMessageData] = useState([]);
  const [username, setUsername] = useState("");
  const [UID, setUID] = useState(0);
  const [userFollowing, setUserFollowing] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userFollowingP, setUserFollowingP] = useState<any[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users").then((response) => {
      setLoginStatus(response.data[0].UID);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3000/users/isAuth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUsername(response.data.Username);
    });
  }, []);

  useEffect(() => {
    fillUserData();
  }, [username]);

  const fillUserData = () => {
    Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
      (response: any) => {
        response.data.map((user: { UID: number }) => {
          setUID(user.UID);
          // formatDate();
        });
      }
    );
  };

  const getUserFollowing = () => {
    Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
      // console.log(response.data);
      setUserFollowing(
        response.data
          .filter((row: any) => row.UID === UID)
          .map((row: any) => row.Following)
      );
    });
  };

  useEffect(() => {
    getUserFollowing();
  }, [UID]);

  const addYourSelf = () => {
    setUserFollowingP(userFollowing.concat(UID));
  };

  useEffect(() => {
    addYourSelf();
  }, [userFollowing]);

  useEffect(() => {
    getMessageData();
  }, [userFollowingP]);

  const getMessageData = () => {
    Axios.get("http://localhost:3000/message").then((response: any) => {
      setMessageData(response.data.map((row: any) => row));
    });
  };

  useEffect(() => {
    filterMessageData();
  }, [messageData]);

  const filterMessageData = () => {
    setFilteredData(
      messageData.filter((row: any) => userFollowingP.includes(row.UID))
    );
  };

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  // Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
  //   setFollowing(
  //     response.data
  //       .filter((row: any) => row.UID === currentUID)
  //       .map((row: any) => row.Following)
  //   );
  //   setFollower(
  //     response.data
  //       .filter((row: any) => row.Following === currentUID)
  //       .map((row: any) => row.currentUID)
  //   );
  // });

  return (
    <React.Fragment>
      <div>
        {window.screen.width < 600 ? <></> : <DesktopPostCard />}
        {Object.values(filteredData).map((event: any) => (
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
      {window.screen.width > 600 ? (
        <></>
      ) : (
        <div className="fab">
          <NewPostFab />
        </div>
      )}
    </React.Fragment>
  );
};
