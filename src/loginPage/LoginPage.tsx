import * as React from "react";
import { Paper, Container, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

export const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper>
          <h1>Login Page</h1>
          <Stack spacing={2}>
            <TextField label="Username" variant="outlined" id="username" />
            <TextField label="Password" variant="outlined" id="password" />
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};
