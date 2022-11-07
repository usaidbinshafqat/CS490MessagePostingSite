import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { default as Axios } from "axios";
import { RightDrawer } from "./RightDrawer";

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

  return (
    <React.Fragment>
      <div>
        {window.screen.width < 600 ? <></> : <DesktopPostCard />}
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
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
