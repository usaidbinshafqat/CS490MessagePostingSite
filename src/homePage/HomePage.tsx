import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { default as Axios } from "axios";

import { DesktopPostCard } from "../postUI/DesktopPostCard";

export const HomePage = () => {
  // const [loginStatus, setLoginStatus] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3000/api/login").then((response) =>{
  //     if (response.data.loggedIn === true) {
  //     setLoginStatus(response.data.user[0].UID)
  //     }
  //   })
  // }, [])

  const [messageData, setMessageData] = React.useState([]);

  const getMessageData = () => {
    Axios.get("http://localhost:3000/message").then((response: any) => {
      setMessageData(response.data);
    });
  };

  React.useEffect(() => {
    getMessageData();
  });

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
