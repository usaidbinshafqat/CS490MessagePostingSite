import { Button, Container, Stack, Typography } from "@mui/material";
import { default as Axios } from "axios";
import React, { useState } from "react";
import Logo from "../loginPage/logo_transparent.png";
import { CustomTextField } from "./CustomTextField";

// class SignUp2 extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       city: "",
//       country: "",
//       picturePath:
//         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
//       dateOfReg: `${new Date().toISOString().slice(0, 19).replace("T", " ")}`,
//       fNameValid: false,
//       lNameValid: false,
//       emailValid: false,
//       passwordValid: false,
//       cityValid: false,
//       countryValid: false,
//     };
//   }

//     Axios.post("http://localhost:3000/api/register", {
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       userName: this.userName,
//       email: this.email,
//       password: this.password,
//       city: this.city,
//       country: this.country,
//       picturePath: this.picturePath,
//       dateOfReg: this.dateOfReg,
//     }).then((response: { data: any }) => {
//       console.log(response.data);
//     });

// }

export {};
