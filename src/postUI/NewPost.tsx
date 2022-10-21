import {
  Typography,
  IconButton,
  AppBar,
  Dialog,
  Toolbar,
  Slide,
  Avatar,
  Button,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions } from "../store/slice";
import { InputTextField } from "./TextField";
import { Close } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";

export const NewPost = () => {
  const open = useAppSelector((state) => state.reducers.modalOpen);
  const dispatch = useAppDispatch();

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={() => dispatch(actions.toggleModal())}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => dispatch(actions.toggleModal())}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              New Post
            </Typography>
          </Toolbar>
        </AppBar>
        <Avatar style={{ marginLeft: "20px", marginTop: "20px" }}>HA</Avatar>
        <div style={{ margin: "20px" }}>
          <InputTextField />
        </div>

        <Button variant="outlined" style={{ margin: "20px" }}>
          Post
        </Button>
      </Dialog>
    </div>
  );
};
