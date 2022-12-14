import * as React from "react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Logo from "./logo_transparent.png";
import { useEffect, useState } from "react";
import { default as Axios } from "axios";
import Alert from "@mui/material/Alert";
import { CustomTextField } from "../signupPage/CustomTextField";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(false); //initialize to true or false?
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (userName === "" || password === "") {
      setErrorMsg("All fields must be filled in!");
      setDisplayError(true);
      setDisable(true);
    } else {
      setDisplayError(false);
      setDisable(false);
    }
  }, [userName, password]);

  useEffect(() => {
    if (userName === "" || password === "") {
      setErrorMsg("All fields must be filled in!");
      setDisplayError(true);
      setDisable(true);
    } else {
      setDisplayError(false);
      setDisable(false);
    }
  }, [userName, password]);

  const login = () => {
    Axios.post("http://localhost:3000/users/login", {
      Username: userName,
      Password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(false);
        setResponseMessage(response.data.message);
        navigate("/Login");
      } else {
        localStorage.setItem("accessToken", response.data);
        setLoginStatus(true);
        navigate("/Home");
      }
    });
  };

  const userAuthentication = () => {
    Axios.get("http://localhost:3000/api/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };

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
          {!loginStatus && responseMessage.length > 0 && (
            <Alert severity="warning">{responseMessage}</Alert>
          )}
          <>
            {displayError ? (
              <Alert severity="warning">{errorMsg}</Alert>
            ) : (
              <></>
            )}
          </>
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
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            disabled={disable}
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
