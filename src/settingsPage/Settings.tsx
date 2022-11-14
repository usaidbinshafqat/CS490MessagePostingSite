/* eslint-disable react-hooks/rules-of-hooks */
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { TopAppBar } from "../homePage/TopAppBar";
import Divider from "@mui/material/Divider";
import { Delete, InfoRounded } from "@mui/icons-material";
import React from "react";

export const SettingsPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div style={{ marginBottom: "70px" }}>
        <TopAppBar />
      </div>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        <ListItem>
          <ListItemButton href="/AboutUs">
            <ListItemAvatar>
              <Avatar>
                <InfoRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemAvatar>
              <Avatar>
                <Delete />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete Account" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            No, I want excitement in my life
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            color="warning"
          >
            Yes I want my life to be boring
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
