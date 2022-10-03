import * as React from "react";
import { Container, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Logo from "./logo_transparent.png";

export const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <TextField label="Username" variant="outlined" id="username" />
          <TextField label="Password" variant="outlined" id="password" />
        </Stack>
      </Container>
    </div>
  );
};
