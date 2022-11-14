import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Popover,
  Box,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";
import "./index.css";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarU } from "../users/SearchBarU";
import { SearchBarUMobile } from "../users/SearchBarUMobile";
import { useState, useEffect } from "react";
import { Weather } from "../weather/weather";
import { default as Axios } from "axios";

export const TopAppBar = () => {
  const dispatch = useAppDispatch();

  const windowSize = window.screen.width;

  const [userData, setUserData] = React.useState([]);

  const getUserData = () => {
    Axios.get("https://cs490msgpstr.herokuapp.com/users").then(
      (response: any) => {
        setUserData(response.data);
      }
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  function zIndexBasedOnScreenSize() {
    if (windowSize < 600) {
      return 0;
    } else {
      return 1;
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + zIndexBasedOnScreenSize(),
        }}
      >
        <Toolbar>
          <>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              msg.pstr
            </Typography>
            <Weather />

            {window.screen.width < 600 ? (
              <SearchBarUMobile data={userData} />
            ) : (
              <SearchBarU data={userData} />
            )}

            {window.screen.width > 600 ? (
              <></>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => dispatch(actions.toggleDrawer())}
              >
                <AccountCircle />
              </IconButton>
            )}
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
