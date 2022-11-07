import * as React from "react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Logo from "./logo_transparent.png";
import { useEffect, useState } from "react";
import { default as Axios } from "axios";
import Alert from '@mui/material/Alert';
import { CustomTextField } from "../signupPage/CustomTextField";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(false); //initialize to true or false?
  const [responseMessage, setResponseMessage] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3000/api/login", {
      userName: userName,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
        setResponseMessage(response.data.message);
        navigate("/Login");
      } else {
        console.log(response.data)
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        navigate("/Home")
      }
    });
  };

  const userAuthentication = () => {
    Axios.get("http://localhost:3000/api/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      }
    }).then((response) => {
      console.log(response)
    })
  }

  // useEffect(() => {
  //   Axios.get("http://localhost:3000/api/login").then((response) =>{
  //     if (response.data.loggedIn === true) {
  //     setLoginStatus(response.data.user[0].UID)
  //     }
  //     console.log(response);
  //   })
  // }, [])

  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <Typography variant="h4">Login</Typography>
          {!loginStatus && <Alert severity="info">{responseMessage}</Alert>}
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
