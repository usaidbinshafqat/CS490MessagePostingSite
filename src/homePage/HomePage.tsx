import * as React from "react";
import { CardUI } from "../cards/CardUI";
import { NewPostFab } from "./NewPostFab";
import "./index.css";

export const HomePage = () => {
  return (
    <React.Fragment>
      <div>
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
