import { Button, Container, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const LandingPageButtons = () => {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Stack spacing={2}>
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
