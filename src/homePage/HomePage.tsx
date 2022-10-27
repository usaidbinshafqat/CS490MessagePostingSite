import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";
import { RightDrawer } from "./RightDrawer";
import { DesktopPostCard } from "../postUI/DesktopPostCard";

export const HomePage = () => {
  return (
    <React.Fragment>
      <div>
        <DesktopPostCard />
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
      <div>
        <RightDrawer />
      </div>
    </React.Fragment>
  );
};
