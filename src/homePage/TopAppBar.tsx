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
import { UsersList } from "../users/UsersList";
import { useState } from "react";
import { Weather } from "../weather/weather";

export const TopAppBar = () => {
  const SearchPopoverDesktop = () => {
    const [anchor, setAnchor] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (onClick: any) => {
      setAnchor(onClick.currentTarget);
      setOpen(true);
    };

    const handleClose = (onClick: any) => {
      setAnchor(null);
      setOpen(false);
    };

    return (
      <React.Fragment>
        <Button
          color="inherit"
          onClick={handleClick}
          endIcon={<SearchIcon> </SearchIcon>}
        >
          Search users
        </Button>
        <Popover open={open} anchorEl={anchor} onClose={handleClose}>
          <div>
            <div>
              <SearchBarU />
            </div>
            <div>
              <UsersList />
            </div>
          </div>
        </Popover>
      </React.Fragment>
    );
  };

  const SearchPopover = () => {
    const [anchor, setAnchor] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (onClick: any) => {
      setAnchor(onClick.currentTarget);
      setOpen(true);
    };

    const handleClose = (onClick: any) => {
      setAnchor(null);
      setOpen(false);
    };

    return (
      <React.Fragment>
        <IconButton color="inherit" onClick={handleClick}>
          <SearchIcon />
        </IconButton>
        <Popover open={open} anchorEl={anchor} onClose={handleClose}>
          <div>
            <div>
              <SearchBarU />
            </div>
            <div>
              <UsersList />
            </div>
          </div>
        </Popover>
      </React.Fragment>
    );
  };

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

            {window.screen.width < 600
              ? SearchPopover()
              : SearchPopoverDesktop()}

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
