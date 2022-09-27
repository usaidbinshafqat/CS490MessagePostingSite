import {
  Button,
  Box,
  Typography,
  Modal,
  //   TextField,
  Container,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions } from "../store/slice";
import { TextField } from "./TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ModalUI = () => {
  const open = useAppSelector((state) => state.reducers.modalOpen);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginBottom: "15px" }}
          >
            New Post
          </Typography>

          <TextField />
          <Container style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined">Post</Button>
            <Button onClick={() => dispatch(actions.toggleModal())}>
              Close Modal
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};
