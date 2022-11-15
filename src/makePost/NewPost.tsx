import { Button, Container, Stack, Typography } from "@mui/material";
import { default as Axios } from "axios";
import { useState } from "react";

export const NewPost = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [picturePath, setPicturePath] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  const [dateOfReg, setDateOfReg] = useState(
    `${new Date().toLocaleString("en-US", {
      month: "short",
      year: "numeric",
      day: "numeric",
    })}`
  );

  const register = () => {
    Axios.post("http://localhost:3000/api/register", {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
      city: city,
      country: country,
      picturePath: picturePath,
      dateOfReg: dateOfReg,
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
};
