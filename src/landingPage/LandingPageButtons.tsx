import { Button, Container, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Logo from "./logo_transparent.png";

export const LandingPageButtons = () => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <Button
            variant="contained"
            style={{ borderRadius: 20 }}
            href="/Login"
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            style={{ borderRadius: 20 }}
            href="/Signup"
          >
            Sign Up
          </Button>
          <Button variant="text" style={{ borderRadius: 20 }} href="/Home">
            Continue as Guest
          </Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};
