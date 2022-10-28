import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Popover,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";
import "./index.css";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';

export const TopAppBar = () => {
  const dispatch = useAppDispatch();

  const windowSize = window.screen.width;

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
        position="sticky"
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + zIndexBasedOnScreenSize(),
        }}
      >
        <Toolbar>
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

          <Button color="inherit" href="/">
            Login
          </Button>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
