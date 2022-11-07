import { RightDrawer } from "../homePage/RightDrawer";
import { TopAppBar } from "../homePage/TopAppBar";
import { DeskopAppView } from "./DesktopAppView";
import { MobileAppView } from "./MobileAppView";

export const AppView = () => {
  return (
    <>
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
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
