import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { FollowButton } from "../cards/FollowButton";
import { default as Axios } from "axios";

export const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/users/isAuth", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    }).then((response: any) => {
      setUser(response.data.Username);
    });
  });
  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Avatar
            src={"https://i.pravatar.cc/300"}
            style={{ width: 60, height: 60 }}
          />
        }
        action={<FollowButton />}
      />
      <CardContent>
        <Typography variant="h5" component="div" align="left">{user}</Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="body2" color="text.secondary" align="left">
              City
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
              Sep '22
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
            420
          </Typography>
        </Box>
        <Box p={2} flex={"auto"}>
          <Typography variant="h6" component="div">
            Following
          </Typography>
          <Typography variant="body2" color="text.secondary">
            69
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
