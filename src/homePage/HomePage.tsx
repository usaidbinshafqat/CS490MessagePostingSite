import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { DesktopPostCard } from "../postUI/DesktopPostCard";

export const HomePage = () => {
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
      <div className="fab">
        <NewPostFab />
      </div>
    </React.Fragment>
  );
};
