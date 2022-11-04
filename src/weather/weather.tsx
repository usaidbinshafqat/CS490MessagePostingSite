import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

interface data {
  currently: any;
  apparentTemperature: any;
  icon: any;
}

export const Weather = () => {
  const [data, setData] = useState<data>();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  const url = `https://dark-sky.p.rapidapi.com/${lat},${long}`;

  const options = {
    method: "GET",
    url: url,
    params: { units: "auto", lang: "en" },
    headers: {
      "X-RapidAPI-Key": "6c8b233e1fmsh8c009dfb86153c6p1245d8jsnfb610b3a165e",
      "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data);
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <DeviceThermostatIcon></DeviceThermostatIcon>
      <Typography>{data?.currently?.apparentTemperature}</Typography>
    </>
  );
};
