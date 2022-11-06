import * as React from "react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Logo from "./logo_transparent.png";
import { useState } from "react";
import { default as Axios } from "axios";
import { CustomTextField } from "../signupPage/CustomTextField";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(0);

  const login = () => {
    Axios.post("http://localhost:3000/api/login", {
      userName: userName,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        // navigate("/Login")
        setLoginStatus(0)
      } else {
        // setLoginStatus(response.data[0].Username);
        // navigate("/Home")
        setLoginStatus(1)
      }
    });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <Typography variant="h4">Login</Typography>

          <CustomTextField
            label="Username"
            variant={"filled"}
            id="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <CustomTextField
            label="Password"
            variant={"filled"}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={login}
            variant="outlined"
            style={{ borderRadius: 20 }}
            href="/Home"
          >
            Login
          </Button>
          <Button variant="text" style={{ borderRadius: 20 }} href="/SignUp">
            Don't have an account? Sign Up
          </Button>
        </Stack>
      </Container>
    </div>
  );
};
