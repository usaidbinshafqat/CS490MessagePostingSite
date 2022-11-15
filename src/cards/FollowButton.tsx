import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const FollowButton = (props: {onClick:()=>void}) => {

    return (
      <Button
        variant="contained"
        style={{ borderRadius: 20 }}
        size="small"
        endIcon={
          <PersonAddIcon color={0 ? "warning" : "error"} />
        }
      >
        {0 ? "follow" : "Following"}
      </Button>
    );
}
