import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { default as Axios } from "axios";
import { useState, useEffect } from "react";
import { FollowButton } from "../cards/FollowButton";

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
  const [currentUID, setCurrentUID] = useState();
  const [following, setFollowing] = useState([] as any);
  const [follower, setFollower] = useState([] as any);

  useEffect(() => {
    Axios.get("http://localhost:3000/users/isAuth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUsername(response.data.Username);
    });

    fillUserData();
  }, [username]);

  const fillUserData = () => {
    Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
      (response: any) => {
        response.data.map(
          (user: {
            Username: string;
            FirstName: string;
            LastName: string;
            City: string;
            DateOfRegistration: string;
          }) => {
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
    Axios.get("http://localhost:3000/users/isAuthID", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setCurrentUID(response.data.UID);
    });

    Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
      setFollowing(
        response.data
          .filter((row: any) => row.UID === currentUID)
          .map((row: any) => row.Following)
      );
      setFollower(
        response.data
          .filter((row: any) => row.Following === currentUID)
          .map((row: any) => row.currentUID)
      );
      console.log(following);
    });
  }, [currentUID, following]);

  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
            {username.slice(0, 1).toUpperCase()}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {`${firstname} ${lastname}`}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <Typography variant="body1" component="div" align="left">
          {`@${username}`}
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
            {follower.length}
          </Typography>
        </Box>
        <Box p={2} flex={"auto"}>
          <Typography variant="h6" component="div">
            Following
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {following.length}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
