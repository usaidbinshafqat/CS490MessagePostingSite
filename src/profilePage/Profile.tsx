import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "../homePage/NewPostFab";
import { DesktopPostCard } from "../postUI/DesktopPostCard";
import { Header } from "./profileHeader";

export const ProfilePage = () => {
  return (
    <React.Fragment>
      <Header />
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
      <div className="fab">
        <NewPostFab />
      </div>
    </React.Fragment>
  );
};