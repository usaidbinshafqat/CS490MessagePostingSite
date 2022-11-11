import { Alert, Button, Container, Stack, Typography } from "@mui/material";
import { default as Axios } from "axios";
import React, { useEffect, useState } from "react";
import { convertCompilerOptionsFromJson } from "typescript";
import Logo from "../loginPage/logo_transparent.png";
import { CountryList } from "./CountryList";
import { CustomTextField } from "./CustomTextField";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [picturePath, setPicturePath] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  const [dateOfReg, setDateOfReg] = useState(
    `${new Date().toISOString().slice(0, 19).replace("T", " ")}`
  );

  useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      city === "" ||
      country === ""
    ) {
      setDisable(true);
      setDisplayError(true);
      setErrorMsg("All fields must be filled in!");
      // console.log("invalid!");
    } else if (!email.includes("@")) {
      setDisable(true);
      setDisplayError(true);
      setErrorMsg("Must enter a valid email address!");
      // console.log("invalid!");
    } else {
      setDisable(false);
      setDisplayError(false);
      // console.log("valid!");
    }
  }, [firstName, lastName, userName, email, password, city, country]);

  // Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("http://localhost:3000/users", {
      FirstName: firstName,
      LastName: lastName,
      Username: userName,
      Email: email,
      Password: password,
      City: city,
      Country: country,
      PicturePath: picturePath,
      DateOfRegistration: dateOfReg,
    }).then((response: { data: any }) => {
      console.log(response.data);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      userName: data.get("userName"),
      city: data.get("cityName"),
      countryName: data.get("countryName"),
    });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <img src={Logo} alt="logo" />
          <Typography variant="h4">Sign Up</Typography>
          <>
            {displayError ? (
              <Alert severity="warning"> {errorMsg} </Alert>
            ) : (
              <></>
            )}
          </>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
            style={{ marginTop: 20 }}
          >
            <CustomTextField
              label="First Name"
              name="firstName"
              required
              fullWidth
              variant={"filled"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <CustomTextField
              label="Last Name"
              id="lastName"
              name="lastName"
              variant={"filled"}
              required
              fullWidth
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-evenly"
            style={{ marginBottom: 10 }}
          >
            <CustomTextField
              label="City"
              required
              fullWidth
              id="cityName"
              name="cityName"
              style={{ marginTop: 5, marginBottom: 5 }}
              variant={"filled"}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />

            <CountryList
              id="countryName"
              onInputChange={(e: any, value: string) => {
                console.log(value);
                setCountry(value);
              }}
            />
          </Stack>
          <CustomTextField
            required
            fullWidth
            id="email"
            label="Email Address"
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomTextField
            name="userName"
            required
            fullWidth
            id="userName"
            label="Username"
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <CustomTextField
            style={{ marginTop: 5, marginBottom: 5 }}
            variant={"filled"}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            disabled={disable}
            variant="outlined"
            style={{ borderRadius: 20, marginBottom: "20px" }}
            href="/Home"
            onClick={register}
          >
            Sign Up
          </Button>
        </Stack>
      </Container>
    </div>
  );
};
