import * as React from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export const NewPostFab = () => {
  return (
    <React.Fragment>
      <div>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </div>
    </React.Fragment>
  );
};
