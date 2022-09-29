import { Home, MoreVert } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import "./index.css";

export const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Home />
          </IconButton>

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
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
