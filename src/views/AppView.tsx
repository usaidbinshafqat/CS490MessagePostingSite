import React from "react";
import { RightDrawer } from "../homePage/RightDrawer";
import { DeskopAppView } from "./DesktopAppView";
import { MobileAppView } from "./MobileAppView";

export const AppView = () => {
  return (
    <>
      {window.innerWidth > 600 ? (
        <div>
          <DeskopAppView />
          <RightDrawer />
        </div>
      ) : (
        <div>
          <MobileAppView />
          <RightDrawer />
        </div>
      )}
    </>
  );
};
