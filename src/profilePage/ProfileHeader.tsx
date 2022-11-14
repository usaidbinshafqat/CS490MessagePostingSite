import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { FollowButton } from "../cards/FollowButton";
import { default as Axios } from "axios";

interface userData {
  Username: any;
  FirstName: any;
  LastName: any;
  City: any;
  DateOfRegistration: any;
}

export const Header = () => {
  const [UID, setUID] = useState(2);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [numFollowing, setNumFollowing] = useState(0);
  const [numFollowers, setNumFollowers] = useState(0);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const fillUserData = () => {
    Axios.get(`http://localhost:3000/users/byId/${UID}`).then(
      (response: any) => {
        console.log(response.data);
        response.data.map(
          (user: {
            Username: string;
            FirstName: string;
            LastName: string;
            City: string;
            DateOfRegistration: string;
          }) => {
            setUsername(user.Username);
            setFirstname(user.FirstName);
            setLastname(user.LastName);
            setCity(user.City);
            setDate(user.DateOfRegistration);
            // formatDate();
          }
        );
      }
    );
  };

  useEffect(() => {
    fillUserData();
  }, []);

  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar
            src={"https://i.pravatar.cc/300"}
            style={{ width: 60, height: 60 }}
          />
        }
      />
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {firstname} {lastname}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <Typography variant="body1" component="div" align="left">
          @{username}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="body2" color="text.secondary" align="left">
              {city}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="body2"
              fontWeight="fontWeightBold"
              color="text.secondary"
              align="left"
            >
              Joined
            </Typography>
            <Typography color="inherit" noWrap>
              &nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              {date}
            </Typography>
          </div>
        </div>
      </CardContent>

      <Divider light />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"}>
          <Typography variant="h6" component="div">
            Followers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {numFollowers}
          </Typography>
        </Box>
        <Box p={2} flex={"auto"}>
          <Typography variant="h6" component="div">
            Following
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {numFollowing}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
