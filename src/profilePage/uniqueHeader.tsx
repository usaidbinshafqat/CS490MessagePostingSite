import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { default as Axios } from "axios";
import { useState, useEffect } from "react";
import { FollowButton } from "../cards/FollowButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Person } from "@mui/icons-material";
interface userData {
  Username: any;
  FirstName: any;
  LastName: any;
  UID: any;
  City: any;
  DateOfRegistration: any;
}

export const UniqueHeader = (params: any) => {
  const [UID, setUID] = useState(2);
  const username = params.username;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [numFollowing, setNumFollowing] = useState(0);
  const [numFollowers, setNumFollowers] = useState(0);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [following, setFollowing] = useState([] as any);
  const [follower, setFollower] = useState([] as any);
  const [currentUID, setCurrentUID] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [userID, setUserID] = useState(0);

  const DeskButton = () => {
    return (
      <Button
        variant="contained"
        style={{ borderRadius: 20 }}
        size="small"
        onClick={() => {
          setIsFollowing(!isFollowing);
        }}
        endIcon={
          !isFollowing ? (
            <PersonAddIcon color={"error"} />
          ) : (
            <Person color={"warning"} />
          )
        }
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    );
  };

  const MobileButton = () => {
    return (
      <IconButton
        onClick={() => {
          setIsFollowing(!isFollowing);
        }}
      >
        {!isFollowing ? (
          <PersonAddIcon color={"error"} />
        ) : (
          <Person color={"warning"} />
        )}
      </IconButton>
    );
  };

  useEffect(() => {
    fillUserData();
  }, [currentUID]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users/isAuthID", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUserID(response.data.UID);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3000/userfollowing").then((response: any) => {
      setFollowing(
        response.data
          .filter((row: any) => row.UID === userID)
          .map((row: any) => row.Following)
      );
      setFollower(
        response.data
          .filter((row: any) => row.Following === userID)
          .map((row: any) => row.currentUID)
      );
    });
  }, [userID]);

  useEffect(() => {
    if (following.includes(currentUID)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [following, follower]);

  useEffect(() => {
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
    });
  }, [currentUID]);

  useEffect(() => {
    setNumFollowing(following.length);
    setNumFollowers(follower.length);
  }, [following, follower]);

  const fillUserData = () => {
    Axios.get(`http://localhost:3000/users/byusername/${username}`).then(
      (response: any) => {
        response.data.map(
          (user: {
            Username: string;
            FirstName: string;
            LastName: string;
            UID: any;
            City: string;
            DateOfRegistration: string;
          }) => {
            setFirstname(user.FirstName);
            setLastname(user.LastName);
            setCity(user.City);
            setDate(user.DateOfRegistration);
            setCurrentUID(user.UID);

            // formatDate();
          }
        );
      }
    );
  };

  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
            {username?.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          window.screen.width > 600 ? (
            <DeskButton></DeskButton>
          ) : (
            <MobileButton></MobileButton>
          )
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
