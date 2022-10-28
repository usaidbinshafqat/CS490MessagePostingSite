import { IconButton } from "@mui/material";
import logo from "./logo_transparent.png";

export const Logo = () => {
  return (
    <div className="logo">
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <img src={logo} alt="logo" style={{ maxHeight: 45, maxWidth: 45 }} />
      </IconButton>
    </div>
  );
};
