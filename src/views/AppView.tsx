import { RightDrawer } from "../homePage/RightDrawer";
import { DeskopAppView } from "./DesktopAppView";
import { MobileAppView } from "./MobileAppView";

export const AppView = () => {
  return (
    <>
      {window.innerWidth > 600 ? (
        <div
          style={{
            alignContent: "center",
            marginLeft: "100px",
            marginRight: "auto",
          }}
        >
          <DeskopAppView />
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
