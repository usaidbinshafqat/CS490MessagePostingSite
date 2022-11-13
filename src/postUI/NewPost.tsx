import {
  IconButton,
  AppBar,
  Dialog,
  Toolbar,
  Slide,
  Avatar,
  CardContent,
  CardHeader,
  Card,
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

  const card = (
    <React.Fragment>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#453750" }} aria-label="profile pic">
            U
          </Avatar>
        }
        titleTypographyProps={{ align: "left" as const, variant: "h6" }}
        title="Create a new post"
      />
      <CardContent>
        <InputTextField />
      </CardContent>
      {/* <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
          fullWidth
        >
          Post
        </Button>
      </CardActions> */}
    </React.Fragment>
  );

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
          </Toolbar>
        </AppBar>
        <Card raised={false} elevation={0}>
          {card}
        </Card>
      </Dialog>
    </div>
  );
};
