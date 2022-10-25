import * as React from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useAppDispatch } from "../store/hooks";
import { actions } from "../store/slice";

export const NewPostFab = () => {
  const dispatch = useAppDispatch();
  return (
    <React.Fragment>
      <div>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => dispatch(actions.toggleModal())}
        >
          <Add />
        </Fab>
      </div>
    </React.Fragment>
  );
};
