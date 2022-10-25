import React from "react";
import { DeskopAppView } from "./DesktopAppView";
import { MobileAppView } from "./MobileAppView";

export const AppView = () => {
  return <>{window.innerWidth > 600 ? <DeskopAppView /> : <MobileAppView />}</>;
};
