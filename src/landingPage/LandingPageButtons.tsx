import { Button, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./logo_transparent.png";

export const LandingPageButtons = () => {
  const windowSize = window.screen.width;

  return (
    <React.Fragment>
      <Toolbar />
      <div>
        {windowSize > 600 ? (
          <img
            src={Logo}
            alt="logo"
            className="desktopLogo"
            style={{
              margin: "auto",
              maxWidth: "60%",
              height: "auto",
              width: "auto",
            }}
          />
        ) : (
          <img
            src={Logo}
            alt="logo"
            style={{
              margin: "auto",
              maxWidth: "25%",
              height: "auto",
              width: "auto",
            }}
          />
        )}
      </div>
      <div>
        <div>
          <Button
            variant="contained"
            style={{ borderRadius: 20 }}
            href="/Login"
          >
            Log In
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            style={{ borderRadius: 20 }}
            href="/Signup"
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button variant="text" style={{ borderRadius: 20 }} href="/Home">
            Continue as Guest
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
