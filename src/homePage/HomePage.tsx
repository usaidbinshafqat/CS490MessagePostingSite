import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { default as Axios } from "axios";
import { DesktopPostCard } from "../postUI/DesktopPostCard";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [loginStatus, setLoginStatus] = useState("");
  const [messageData, setMessageData] = React.useState([]);

  useEffect(() => {
    Axios.get("https://msgpstrbackend.herokuapp.com/users").then((response) => {
      setLoginStatus(response.data[0].UID);
    });
  }, []);

  useEffect(() => {
    const getMessageData = () => {
      Axios.get("https://msgpstrbackend.herokuapp.com/message").then(
        (response: any) => {
          setMessageData(response.data);
        }
      );
    };
    getMessageData();
  }, []);

  return (
    <React.Fragment>
      <div>
        {window.screen.width < 600 ? <></> : <DesktopPostCard />}
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
