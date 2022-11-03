import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { LockPersonRounded, LockOpenRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export default function CardToggleButton() {
  const [selected, setSelected] = React.useState(false);

  const handleTooltipTitle = () => {
    if (selected) {
      return "Make post private";
    } else {
      return "Make post public";
    }
  };

  return (
    <Tooltip title={handleTooltipTitle()} arrow>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        color="primary"
        size="small"
        style={{ borderRadius: 20, marginLeft: "10px", marginBottom: "10px" }}
      >
        {selected ? <LockOpenRounded /> : <LockPersonRounded />}
      </ToggleButton>
    </Tooltip>
  );
}
